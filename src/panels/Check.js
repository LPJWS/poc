import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, ModalRoot, Snackbar, Div, Text, Avatar, ScreenSpinner, View, Gradient, Title, IconButton, PanelHeaderBack, FormLayout, PullToRefresh, ModalCard, VKCOM } from '@vkontakte/vkui';
import { Icon24BrowserForward } from '@vkontakte/icons';
import { Icon24MoneyCircle } from '@vkontakte/icons';
import { Icon20AddCircle } from '@vkontakte/icons';
import { Icon56CheckCircleOutline } from '@vkontakte/icons';
import { Icon56NotePenOutline } from '@vkontakte/icons';
import { Icon56GestureOutline } from '@vkontakte/icons';
import { Icon12Favorite } from '@vkontakte/icons';
import { Icon16Linked } from '@vkontakte/icons';
import { Icon56ErrorTriangleOutline } from '@vkontakte/icons';
import { Icon16ReplyOutline } from '@vkontakte/icons';

const Check = (props) => {
	const [popout, setPopout] = useState(null);
	const [member, setMember] = useState(null);
    const [check, setCheck] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [snackbar, setSnackbar] = useState(null);

	function getMember() {
		setPopout(<ScreenSpinner/>)
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/member/me/?'+params)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
			.then(member => {
				setPopout(null)
				setMember(member)
			})
	}

    function getCheck() {
		setPopout(<ScreenSpinner/>)
		const params = window.location.search.slice(1);
            fetch('https://pieceofchit.xyz/api/v1/check/get/'+ props.check +'/?'+params)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
			.then(check_ => {
				setPopout(null)
				setCheck(check_)
			})
	}

    function copyLink() {
        bridge.send("VKWebAppCopyText", {"text": "https://vk.com/app7987402#" + check.id});
        setSnackbar(
            <Snackbar
                onClose={() => setSnackbar(null)}
            >
               Ссылка скопирована
            </Snackbar>
        )
    }

    function removeRecord(record_) {
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/record/delete/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: record_ })
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
			.then(() => {
				getCheck()
			})
	};
    
    const modal = (
        <ModalRoot
            activeModal={activeModal}
        >
            <ModalCard
                id='close'
                onClose={() => setActiveModal(null)}
                icon={<Icon56ErrorTriangleOutline/>}
                header="Вы уверены, что хотите закрыть счет?"
                subheader="После этого будет нельзя добавить новые затраты, а всем пользователям счета будут рассчитаны суммы переводов"
                actions={
                    <Button size="l" mode="primary" onClick={props.go} data-to="home" data-checkclose={check ? check.id : null}>
                        Да, закрыть
                    </Button>
                }
            />

            <ModalCard
                id='leave'
                onClose={() => setActiveModal(null)}
                icon={<Icon56ErrorTriangleOutline/>}
                header="Вы уверены, что хотите покинуть счет?"
                actions={
                    <Button size="l" mode="primary" onClick={props.go} data-to="home" data-checkleave={check ? check.id : null}>
                        Да, покинуть
                    </Button>
                }
            />
        </ModalRoot>
    ) 

	useEffect(() => {
		getMember();
        getCheck();
	}, [])

	return (
		<View activePanel={props.id} popout={popout} modal={modal}>
            {check && member &&
			<Panel id={props.id}>
                <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>{check.title}</PanelHeader>
                <Group>
                    <Gradient style={{
                        margin: '-7px -7px 0 -7px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 32,
                    }}>	
                        <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>Общая сумма счета</Title>
                        <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>{check.total_amount} ₽</Title>
                        <Button size="m" mode="outline" onClick={() => {getMember(); getCheck()}}>Нажмите для обновления</Button>
                    </Gradient>
                </Group>
                <Group header={<Header indicator={check.members.length}>Участники</Header>}>
                    {
                        check.members.length ? check.members.map((member_, index) => {
                            return (
                                <Cell
                                    disabled
                                    before={<Avatar size={44} src={member_.photo}/>}
                                    key={member_.id}
                                    badge={member_.id === check.organizer.id ? <Icon12Favorite/>: ''}
                                >
                                    {member_.name}
                                </Cell>
                            )
                        }) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
                                <Title level="2" weight="regular">Нет участников ?! Да как такое возможно?!</Title>
                                <Icon56NotePenOutline style={{marginTop: ".5rem"}}/>
                            </Div>
                    }
                    <Div style={{display: "flex"}}>
                        <Button 
                            stretched size="l" 
                            mode="outline"
                            before={<Icon16Linked/>}
                            onClick={() => {copyLink()}}
                            style={{marginRight: ".5rem"}}
                        >
                            Скопировать ссылку
                        </Button>
                        <Button 
                            stretched size="l" 
                            mode="outline"
                            before={<Icon16ReplyOutline/>}
                            onClick={() => {bridge.send("VKWebAppShare", {"link": "https://vk.com/app7987402#" + check.id});}}
                        >
                            Пригласить
                        </Button>
                    </Div>
                </Group>
                <Group header={<Header indicator={check.records.length}>Затраты</Header>}>
                    {
                        check.records.length ? check.records.map((record, index) => {
                            return (
                                record.member.id == member.id || member.id == check.organizer.id ? 
                                    <RichCell
                                        disabled
                                        multiline
                                        text={record.object}
                                        before={<Avatar size={72} src={record.member.photo}/>}
                                        after={record.amount + ' ₽'}
                                        key={record.id}
                                        indicator={record.amount + ' ₽'}
                                        caption={record.desc}
                                        actions={
                                            <React.Fragment>
                                            <Button mode="destructive" onClick={() => removeRecord(record.id)}>удалить</Button>
                                            </React.Fragment>
                                        }
                                    >
                                        <Title level="2" weight="regular">{record.member.name}</Title>
                                    </RichCell>
                                :
                                <RichCell
                                    disabled
                                    multiline
                                    text={record.object}
                                    before={<Avatar size={72} src={record.member.photo}/>}
                                    after={record.amount + ' ₽'}
                                    key={record.id}
                                    indicator={record.amount + ' ₽'}
                                    caption={record.desc}
                                >
                                    <Title level="2" weight="regular">{record.member.name}</Title>
                                </RichCell>
                            )
                        }) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
                                <Title level="2" weight="regular">Трат еще нет</Title>
                                <Icon56NotePenOutline style={{marginTop: ".5rem"}}/>
                            </Div>
                    }
                    <Div>
                        <Button 
                            stretched size="l" 
                            mode="outline"
                            onClick={props.go}
                            data-to="create"
                            data-check={check.id}
                        >
                            <Icon20AddCircle/>
                        </Button>
                    </Div>
                </Group>
                {
                    member.id === check.organizer.id &&
                    <Div>
                        <Button 
                            stretched size="l" 
                            mode="outline"
                            onClick={() => {setActiveModal('close')}}
                        >
                            Нажмите здесь для закрытия счета и подсчета результатов
                        </Button>
                    </Div>
                }
                {
                    member.id !== check.organizer.id &&
                    <Div>
                        <Button 
                            stretched size="l" 
                            mode="destructive"
                            onClick={() => {setActiveModal('leave')}}
                        >
                            Выйти
                        </Button>
                    </Div>
                }
                {snackbar}
			</Panel>
            }
		</View>
	)
};

Check.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Check;
