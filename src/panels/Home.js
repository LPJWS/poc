import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, Div, Avatar, ScreenSpinner, View, Gradient, Title, PullToRefresh } from '@vkontakte/vkui';
import { Icon24BrowserForward } from '@vkontakte/icons';
import { Icon24MoneyCircle } from '@vkontakte/icons';
import { Icon20AddCircle } from '@vkontakte/icons';
import { Icon56CheckCircleOutline } from '@vkontakte/icons';
import { Icon56NotePenOutline } from '@vkontakte/icons';
import { Icon56GestureOutline } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => {
	const [popout, setPopout] = useState(null);
	const [member, setMember] = useState(null);
	const [fetching, setFetching] = useState(false);

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

	const onRefresh = () => {
		setFetching(true)
		getMember()
		setFetching(false)
	}

	useEffect(() => {
		getMember()
	}, [])

	// console.log(fetchedUser)
	return (
		<View activePanel={id} popout={popout}>
			<Panel id={id}>
				<PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
					<PanelHeader>Поделим?</PanelHeader>
					{member &&
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
							{member.photo ? <Avatar size={96} src={member.photo}/> : null}
							<Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{member.name}</Title>
						</Gradient>
					</Group>}
					{member && 
					<Group header={<Header>Счета</Header>}>
						{
							member.checks.length ? member.checks.map((check, index) => {
								return (
									<Cell
										before={<Icon24MoneyCircle/>}
										description={check.total_amount + ' ₽'}
										after={<Icon24BrowserForward />}
										key={check.id}
										onClick={go}
										data-to="check"
										data-check={check.id}
									>
										<Title level="2" weight="regular">{check.title}</Title>
									</Cell>
								)
							}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
									<Title level="2" weight="regular">У вас нет активных счетов</Title>
									<Icon56NotePenOutline style={{marginTop: ".5rem"}}/>
								</Div>
						}
						<Div>
							<Button 
								stretched size="l" 
								mode="outline"
								onClick={go}
								data-to="create"
							>
								<Icon20AddCircle/>
							</Button>
						</Div>
					</Group>
					}
					{member && 
					<Group header={<Header>Долги</Header>}>
						{
							member.debts.length ? member.debts.map((debt, index) => {
								return (
									debt.is_sended ? 
										<RichCell
											disabled
											multiline
											text={debt.check_obj.title}
											before={<Avatar size={72} src={debt.to_member.photo}/>}
											after={debt.amount + ' ₽'}
											key={debt.id}
											caption="Ожидается подтверждение"
										>
											<Title level="2" weight="regular">{debt.to_member.name}</Title>
										</RichCell>
									:
										<RichCell
											disabled
											multiline
											text={debt.check_obj.title}
											before={<Avatar size={72} src={debt.to_member.photo}/>}
											after={debt.amount + ' ₽'}
											key={debt.id}
											actions={
												<React.Fragment>
												<Button>Я перевел {+ fetchedUser.sex == 1 ? 'а' : ''}</Button>
												</React.Fragment>
											}
										>
										<Title level="2" weight="regular">{debt.to_member.name}</Title>
									</RichCell>
								)
							}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
									<Title level="2" weight="regular">У вас нет долгов</Title>
									<Icon56CheckCircleOutline style={{marginTop: ".5rem"}}/>
								</Div>
						}
					</Group>
					}	
					{member && 
					<Group header={<Header>Должники</Header>}>
						{
							member.debtors.length ? member.debtors.map((debtor, index) => {
								return (
									!debtor.is_sended ? 
										<RichCell
											disabled
											multiline
											text={debtor.check_obj.title}
											before={<Avatar size={72} src={debtor.from_member.photo}/>}
											after={debtor.amount + ' ₽'}
											key={debtor.id}
											caption="Ожидается перевод"
										>
											<Title level="2" weight="regular">{debtor.from_member.name}</Title>
										</RichCell>
									:
										<RichCell
											disabled
											multiline
											text={debtor.check_obj.title}
											before={<Avatar size={72} src={debtor.from_member.photo}/>}
											after={debtor.amount + ' ₽'}
											key={debtor.id}
											actions={
												<React.Fragment>
												<Button>Подтвердить перевод</Button>
												</React.Fragment>
											}
										>
										<Title level="2" weight="regular">{debtor.from_member.name}</Title>
									</RichCell>
								)
							}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
									<Title level="2" weight="regular">У вас нет должников</Title>
									<Icon56GestureOutline style={{marginTop: ".5rem"}}/>
								</Div>
						}
					</Group>
					}
				</PullToRefresh>
			</Panel>
		</View>
	)
};

Home.propTypes = {
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

export default Home;
