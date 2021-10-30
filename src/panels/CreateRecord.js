import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, Div, Text, FormLayout, Avatar, ScreenSpinner, View, Gradient, Title, IconButton, PanelHeaderBack, FormItem, Input } from '@vkontakte/vkui';
const CreateRecord = (props) => {
	const [popout, setPopout] = useState(null);
	const [object, setObject] = useState('');
	const [desc, setDesc] = useState('');
	const [amount, setAmount] = useState(0.0);
	const [member, setMember] = useState(null);

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

	useEffect(() => {
		getMember();
	}, [])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="check" data-check={props.check}/>}>Новая трата</PanelHeader>
				<Group>
					<FormLayout>
						<FormItem
							top="На что?" 
						>
							<Input
								type="text"
								name="object"
								value={object}
								onChange={e => {setObject(e.target.value)}}
							/>
						</FormItem>
						<FormItem
							top="Краткое описание" 
						>
							<Input
								type="text"
								name="desc"
								value={desc}
								onChange={e => {setDesc(e.target.value)}}
							/>
						</FormItem>
						<FormItem
							top="Сколько?"
						>
							<Input
								type="number"
								name="amount"
								value={amount}
								onChange={e => {setAmount(e.target.value)}}
							/>
						</FormItem>
						<Div>
							{(object && amount) ?
								<Button 
									size="l" 
									mode="outline" 
									stretched
									onClick={props.go}
									data-to="check"
									data-newobject={object}
									data-newdesc={desc}
									data-newamount={amount}
									data-check={props.check}
								>
									Создать
								</Button>
							:
								<Button 
									size="l" 
									mode="outline" 
									stretched
									disabled
								>
									Создать
								</Button>
							}
						</Div>
                    </FormLayout>
				</Group>
			</Panel>
		</View>
	)
};

CreateRecord.propTypes = {
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

export default CreateRecord;
