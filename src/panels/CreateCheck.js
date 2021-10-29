import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, RichCell, Cell, Div, Text, FormLayout, Avatar, ScreenSpinner, View, Gradient, Title, IconButton, PanelHeaderBack, FormItem, Input } from '@vkontakte/vkui';
const CreateCheck = (props) => {
	const [title, setTitle] = useState('');

	return (
		<View activePanel={props.id}>
			<Panel id={props.id}>
				<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Создать счет</PanelHeader>
				<Group>
					<FormLayout>
						<FormItem
							top="Название" 
						>
							<Input
								type="text"
								name="title"
								value={title}
								onChange={e => {setTitle(e.target.value)}}
								align="center"
							/>
						</FormItem>
                    </FormLayout>
					<Div>
						<Button 
							size="l" 
							mode="outline" 
							stretched
							onClick={props.go}
							data-to="home"
							data-newcheck={title}
						>
							Создать
						</Button>
					</Div>
				</Group>
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
