import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, Div, Text, FormLayout, Avatar, ScreenSpinner, View, Gradient, Title, IconButton, PanelHeaderBack } from '@vkontakte/vkui';
import { Icon24BrowserForward } from '@vkontakte/icons';
import { Icon24MoneyCircle } from '@vkontakte/icons';
import { Icon20AddCircle } from '@vkontakte/icons';
import { Icon56CheckCircleOutline } from '@vkontakte/icons';
import { Icon56NotePenOutline } from '@vkontakte/icons';
import { Icon56GestureOutline } from '@vkontakte/icons';

const CreateCheck = (props) => {
	const [popout, setPopout] = useState(null);
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
		getMember()
	}, [])

	// console.log(fetchedUser)
	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Создать счет</PanelHeader>
				{member &&
				<Group>
					<FormLayout>
                        
                    </FormLayout>
				</Group>
                }
			</Panel>
		</View>
	)
};

CreateCheck.propTypes = {
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

export default CreateCheck;
