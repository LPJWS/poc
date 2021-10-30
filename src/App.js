import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import CreateCheck from './panels/CreateCheck';
import Check from './panels/Check';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [check, setCheck] = useState(null);

	let hash = window.location.hash.replace('#', '')
	if (hash) {
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/check/join/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: hash })
		}).then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
			.then((check_) => {
				setCheck(check_.id)
				setActivePanel("check")
			})
		window.location.hash = ''
	}

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		if (e.currentTarget.dataset.checkclose) {
			closeCheck(e.currentTarget.dataset.checkclose)
		}
		else if (e.currentTarget.dataset.checkleave) {
			leaveCheck(e.currentTarget.dataset.checkleave)
		}
		else if (e.currentTarget.dataset.check) {
			setCheck(e.currentTarget.dataset.check);
		}
		setActivePanel(e.currentTarget.dataset.to);
	};

	function closeCheck(check_) {
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/check/close/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: check_ })
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
				
			})
	}

	function leaveCheck(check_) {
		const params = window.location.search.slice(1);
		fetch('https://pieceofchit.xyz/api/v1/check/leave/?'+params, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: check_ })
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
				
			})
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<CreateCheck id='create' fetchedUser={fetchedUser} go={go}/>
					<Check id='check' fetchedUser={fetchedUser} go={go} check={check}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
