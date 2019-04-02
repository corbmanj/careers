
import React, { Component } from 'react';

import * as style from './Containers.less';
import Breadcrumb from '../Components/Breadcrumb'
import MemberList from '../Components/MemberList'
import MemberInfo from '../Components/MemberInfo'

class Teams extends Component {
	constructor(props) {
		super(props)
		this.state = {
			teams: [{"id":"e65a26fb-18f6-483f-8e49-190a06d86210","name":"Front-End"},
			{"id":"df99ea14-f6b4-4900-8b1b-ca803071d09d","name":"Platform"},
			{"id":"2db83ffe-03aa-4cdf-bdea-69ef1a6bb928","name":"Data"},
			{"id":"96287cfa-7296-4e4a-b3cc-e22d65eec84c","name":"Customer Success"},
            {"id":"889dfa77-f339-4322-888a-079e7933bb4a","name":"Ops & Support"}],
            selectedTeamId: 'e65a26fb-18f6-483f-8e49-190a06d86210',
            selectedMemberId: '27-0550193',
            members: [{"id":"27-0550193","name":{"first":"Everard","last":"Rangle"},"avatar":"https://robohash.org/voluptasautemearum.jpg?size=100x100&set=set1","title":"Computer Systems Analyst III","location":{"city":"Saint Augustine","state":"FL"}},
			{"id":"89-0039954","name":{"first":"Darren","last":"Winnett"},"avatar":"https://robohash.org/voluptaseaquia.bmp?size=100x100&set=set1","title":"Data Coordiator","location":{"city":"Midland","state":"TX"}},
			{"id":"11-4029256","name":{"first":"Tirrell","last":"Carrett"},"avatar":"https://robohash.org/solutaipsamea.jpg?size=100x100&set=set1","title":"Safety Technician III","location":{"city":"Durham","state":"NC"}},
			{"id":"23-4599788","name":{"first":"Hugo","last":"Monkton"},"avatar":"https://robohash.org/quisquamestquis.bmp?size=100x100&set=set1","title":"Health Coach I","location":{"city":"Bakersfield","state":"CA"}},
			{"id":"91-6533714","name":{"first":"Sephira","last":"de Clerc"},"avatar":"https://robohash.org/eosrepudiandaedeleniti.bmp?size=100x100&set=set1","title":"Systems Administrator I","location":{"city":"Lubbock","state":"TX"}},
			{"id":"60-2854748","name":{"first":"Willetta","last":"Redley"},"avatar":"https://robohash.org/atnonanimi.jpg?size=100x100&set=set1","title":"Associate Professor","location":{"city":"Houston","state":"TX"}},
			{"id":"65-5837687","name":{"first":"Emeline","last":"Tolworth"},"avatar":"https://robohash.org/reprehenderitnatusperferendis.png?size=100x100&set=set1","title":"Structural Analysis Engineer","location":{"city":"Jacksonville","state":"FL"}},
			{"id":"75-3460632","name":{"first":"Quint","last":"Delete"},"avatar":"https://robohash.org/suntdeseruntest.bmp?size=100x100&set=set1","title":"Compensation Analyst","location":{"city":"Abilene","state":"TX"}},
			{"id":"31-2152422","name":{"first":"Carole","last":"Boodell"},"avatar":"https://robohash.org/nequeaperiamipsum.bmp?size=100x100&set=set1","title":"Accounting Assistant II","location":{"city":"Chula Vista","state":"CA"}},
			{"id":"14-7234215","name":{"first":"Jay","last":"Morphey"},"avatar":"https://robohash.org/saepelaboreveritatis.jpg?size=100x100&set=set1","title":"Nurse","location":{"city":"Oakland","state":"CA"}},
			{"id":"28-8391786","name":{"first":"Cecil","last":"Tremayne"},"avatar":"https://robohash.org/quiaestrepellat.jpg?size=100x100&set=set1","title":"Operator","location":{"city":"Irving","state":"TX"}},
			{"id":"56-4162667","name":{"first":"Chery","last":"Linthead"},"avatar":"https://robohash.org/numquamquiapariatur.bmp?size=100x100&set=set1","title":"Design Engineer","location":{"city":"El Paso","state":"TX"}},
			{"id":"06-8441896","name":{"first":"Debbie","last":"Dupoy"},"avatar":"https://robohash.org/quamrerumquaerat.png?size=100x100&set=set1","title":"Compensation Analyst","location":{"city":"Houston","state":"TX"}},
			{"id":"47-5443964","name":{"first":"Dania","last":"Burwell"},"avatar":"https://robohash.org/ipsumatdolore.png?size=100x100&set=set1","title":"Media Manager IV","location":{"city":"Los Angeles","state":"CA"}},
			{"id":"48-0748975","name":{"first":"Laina","last":"Vettore"},"avatar":"https://robohash.org/evenietrepellatsed.jpg?size=100x100&set=set1","title":"Research Assistant II","location":{"city":"Austin","state":"TX"}},
			{"id":"06-4402426","name":{"first":"Valerie","last":"Bogaert"},"avatar":"https://robohash.org/enimetofficia.bmp?size=100x100&set=set1","title":"Accountant II","location":{"city":"Oakland","state":"CA"}},
			{"id":"77-9948048","name":{"first":"Darb","last":"Gallego"},"avatar":"https://robohash.org/consequatursaepereprehenderit.bmp?size=100x100&set=set1","title":"Civil Engineer","location":{"city":"Sacramento","state":"CA"}},
			{"id":"47-3389251","name":{"first":"Noelle","last":"Michelle"},"avatar":"https://robohash.org/nihilullamex.jpg?size=100x100&set=set1","title":"Programmer Analyst IV","location":{"city":"San Jose","state":"CA"}},
			{"id":"95-4909586","name":{"first":"Arlee","last":"While"},"avatar":"https://robohash.org/consecteturarchitectoveniam.jpg?size=100x100&set=set1","title":"Research Nurse","location":{"city":"Pinellas Park","state":"FL"}},
			{"id":"76-0228370","name":{"first":"Sheri","last":"Treend"},"avatar":"https://robohash.org/etrepudiandaeat.bmp?size=100x100&set=set1","title":"VP Sales","location":{"city":"Ocala","state":"FL"}},
			{"id":"90-4143699","name":{"first":"Jannel","last":"Nitto"},"avatar":"https://robohash.org/isteassumendablanditiis.bmp?size=100x100&set=set1","title":"Product Engineer","location":{"city":"Fayetteville","state":"NC"}},
			{"id":"24-2727646","name":{"first":"Johnny","last":"Kerry"},"avatar":"https://robohash.org/iuredolorfuga.bmp?size=100x100&set=set1","title":"Research Assistant III","location":{"city":"Riverside","state":"CA"}},
			{"id":"85-2660512","name":{"first":"Alyce","last":"Aldrin"},"avatar":"https://robohash.org/voluptatemistenon.bmp?size=100x100&set=set1","title":"Executive Secretary","location":{"city":"Dallas","state":"TX"}},
			{"id":"23-1075075","name":{"first":"Morten","last":"Tribe"},"avatar":"https://robohash.org/temporedoloremqueaccusantium.png?size=100x100&set=set1","title":"Programmer III","location":{"city":"Jacksonville","state":"FL"}}]
		}
	}

	updateSelectedTeam = (teamId) => {
		this.setState({ selectedTeamId: teamId })
	}

	render() {
		const selectedMember = this.state.members.find(member => member.id === this.state.selectedMemberId)
		return (
            <div>
                <Breadcrumb selectedTeamId={this.state.selectedTeamId} updateSelectedTeam={this.updateSelectedTeam}/>
                <div className={style.Teams}>
                    <div className={style.memberList}><MemberList members={this.state.members} selectedMemberId={this.state.selectedMemberId}/></div>
                    <div className={style.memberInfo}><MemberInfo selectedMember={selectedMember} /></div>
                </div>
            </div>
		);
	}
}

export default Teams;