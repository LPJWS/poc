import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, Div, Avatar, ScreenSpinner, View, Gradient, Title, IconButton, PullToRefresh, FormLayout, FormItem, Input, FormLayoutGroup } from '@vkontakte/vkui';
import { Icon24BrowserForward } from '@vkontakte/icons';
import { Icon24MoneyCircle } from '@vkontakte/icons';
import { Icon20AddCircle } from '@vkontakte/icons';
import { Icon56CheckCircleOutline } from '@vkontakte/icons';
import { Icon56NotePenOutline } from '@vkontakte/icons';
import { Icon56GestureOutline } from '@vkontakte/icons';
import { Icon36MoneyCircleOutline } from '@vkontakte/icons';
import { Icon16Done } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => {
	const [popout, setPopout] = useState(null);
	const [member, setMember] = useState(null);
	const [fetching, setFetching] = useState(false);
	const [title, setTitle] = useState('');

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

	function send(debt_id) {
		setPopout(<ScreenSpinner/>)
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/debt/send/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: debt_id })
		})
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

	function confirm(debt_id) {
		setPopout(<ScreenSpinner/>)
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/debt/confirm/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: debt_id })
		})
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

	function newCheck() {
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/check/new/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: title })
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
				setTitle('')
				getMember()
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

	return (
		<View activePanel={id} popout={popout}>
			{fetchedUser &&
			<Panel id={id}>
				<PanelHeader>???????????????</PanelHeader>
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
				<Group header={<Header>?????????? <Button size="s" mode="outline" onClick={() => getMember()}>????????????????</Button></Header>}>
					{
						member.checks.length ? member.checks.map((check, index) => {
							return (
								<RichCell
									multiline
									text={check.total_amount + ' ???'}
									after={<Icon24BrowserForward />}
									key={check.id}
									onClick={(go)}
									data-to="check"
									data-check={check.id}
								>
									<Title level="2" weight="regular">{check.title}</Title>
								</RichCell>
							)
						}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
								<Title level="2" weight="regular">?? ?????? ?????? ???????????????? ????????????</Title>
								<Icon56NotePenOutline style={{marginTop: ".5rem"}}/>
							</Div>
					}
					<FormLayoutGroup mode="horizontal">
						<FormItem top="????????????????">
							<Input 
								type="text"
								name="title"
								value={title}
								onChange={e => {setTitle(e.target.value)}}
								align="center"
							/>
						</FormItem>
					</FormLayoutGroup>
					<Div>
						{title ?
							<Button 
								stretched size="l" 
								mode="outline"
								onClick={() => {newCheck()}}
							>
								<Icon20AddCircle/>
							</Button>
						:
						<Button stretched size="l" mode="outline" disabled><Icon20AddCircle/></Button>
						}
					</Div>
				</Group>
				}
				{member && 
				<Group header={<Header>?????????? <Button size="s" mode="outline" onClick={() => getMember()}>????????????????</Button></Header>}>
					{
						member.debts.length ? member.debts.map((debt, index) => {
							return (
								debt.is_sended ? 
									<RichCell
										disabled
										multiline
										text={debt.check_obj.title}
										before={<Avatar size={72} src={debt.to_member.photo}/>}
										after={debt.amount + ' ???'}
										key={debt.id}
										caption="?????????????????? ??????????????????????????"
									>
										<Title level="2" weight="regular">{debt.to_member.name}</Title>
									</RichCell>
								:
									<RichCell
										disabled
										multiline
										text={debt.check_obj.title}
										before={<Avatar size={72} src={debt.to_member.photo}/>}
										after={debt.amount + ' ???'}
										key={debt.id}
										actions={
											<React.Fragment>
											<Button
												onClick={() => send(debt.id)}
											>
												?? ?????????????? {+ fetchedUser.sex == 1 ? '??' : ''}
											</Button>
											</React.Fragment>
										}
									>
									<Title level="2" weight="regular">{debt.to_member.name}</Title>
								</RichCell>
							)
						}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
								<Title level="2" weight="regular">?? ?????? ?????? ????????????</Title>
								<Icon56CheckCircleOutline style={{marginTop: ".5rem"}}/>
							</Div>
					}
				</Group>
				}	
				{member && 
				<Group header={<Header>???????????????? <Button size="s" mode="outline" onClick={() => getMember()}>????????????????</Button></Header>}>
					{
						member.debtors.length ? member.debtors.map((debtor, index) => {
							return (
								!debtor.is_sended ? 
									<RichCell
										disabled
										multiline
										text={debtor.check_obj.title}
										before={<Avatar size={72} src={debtor.from_member.photo}/>}
										after={debtor.amount + ' ???'}
										key={debtor.id}
										caption="?????????????????? ??????????????"
									>
										<Title level="2" weight="regular">{debtor.from_member.name}</Title>
									</RichCell>
								:
									<RichCell
										disabled
										multiline
										text={debtor.check_obj.title}
										before={<Avatar size={72} src={debtor.from_member.photo}/>}
										after={debtor.amount + ' ???'}
										key={debtor.id}
										actions={
											<React.Fragment>
											<Button
												onClick={() => confirm(debtor.id)}
											>
												?????????????????????? ??????????????
											</Button>
											</React.Fragment>
										}
									>
									<Title level="2" weight="regular">{debtor.from_member.name}</Title>
								</RichCell>
							)
						}) : <Div style={{alignItems: "center", display: "flex", flexDirection: 'column'}}>
								<Title level="2" weight="regular">?? ?????? ?????? ??????????????????</Title>
								<Icon56GestureOutline style={{marginTop: ".5rem"}}/>
							</Div>
					}
				</Group>
				}
			</Panel>}
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
