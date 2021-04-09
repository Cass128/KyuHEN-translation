export default {
	categories: {
		gameOne: {
			title: 'Jogo Um',
			desc: 'Criar um jogo com uma engine existente de sua escolha, ex: GameMaker ou Unity.',
		},
		gameTwo: {
			title: 'Jogo Dois',
			desc: 'Criar um jogo do zero com a sua engine e compilado com vitaSDK ou dolceSDK.',
		},
		utility: {
			title: 'Utilidades',
			desc: 'Criar um homebrew ou um plugin.',
		},
		port: {
			title: 'Port',
			desc: 'Portar um aplicativo ou um jogo de outro sistema, ou um emulador.',
		},
	},

	rules: {
		submissionsLimit:
			'Desenvolvedores podem enviar quantos envios que eles quiserem mas só ganham apenas um prêmio por categoria.',
		previouslySubmitted:
			'Para jogos, se eles foram previamente lançados em outra plataforma como o PS4 ou Switch, mesmo se é seu, ele deve ser enviado na categoria de port. embora utilidades de outras cenas homebrew deverão permanecer na categoria de utilidades',
		releasedBefore:
			'Se o jogo que você quer enviar já foi lançado antes no PSVita, ele deve ter estado no estado de prototipo e sendo aprimorado para fazê-lo de um jogo completo. Para utilidades, as mudanças devem ser consequentes ao homebrew/plugin o que requer bastante trabalho.',
		noPiracy:
			'Nenhuma pirataria será permitida. Nenhum uso de assets com copyright é aceito, os jogos devem ser uma criação original do autor. Nós sim permitimos o uso de genericos de graça que você pode achar na unity assets store por exemplo mas observe que nós vamos valorizar mais os jogos que usam assets feito por si mesmo. E pelos ports, não inclua arquivos de jogos se eles não são gratuitos para compartilhar. Engines feitas de engenharia reversa são permitidas, mas engines feitas de um codigo fonte vazado de uma engine de jogo não são permitidas.',
		paypal: 'Você deve possuir uma conta no paypal para receber o dinheiro.',
		splashScreen:
			'Você deve incluir o splash screen do concurso na inicialização do seu Homebrew (você pode inclui-la como um asset da live area, Plugins obviamente não conseguem mostrar o splashcreen, no lugar vamos te pedir pra colocar uma menção do concurso kyûHEN dentro do seu readme no seu repositorio do guithub.',
		publicRelease:
			'Você pode compartilhar uma build publica fora do nosso website só quando nós tivermos aprovado e já tiver apresentado o seu projeto no nosso website ',
		openSource:
			'se o seu projeto é baseado em um projeto de codigo aberto, você deve seguir a licença do projeto de codigo aberto',
		cheats: 'Se nós te pegarmos trapaceando, você estará automaticamente banido do concurso.',
		categoriesPrizes:
			'Os prêmios das categorias podem estar sujeitos a pequenas mudanças dependendo nos envios e na quantidade coletada.',
	},

	pages: {
		home: {
			title: 'Home',
			slogan: 'Quem pode fazer o melhor',
			categories: {
				homebrew: 'homebrew',
				game: 'jogo',
				utility: 'utilidade',
				port: 'port',
			},
			donate: 'Doar',
			submit: 'Enviar',
			submittedProjects: 'Projetos Enviados',
			aboutTitle: 'Sobre',
			aboutContent1:
				"De uma inocente conversa no twitter a uma realidade, nós estamos fazendo o 3° concurso de homebrew para o PSVita. Esses ultimos dias/ meses tem sido incríveis para o PSVita. De uma cena silenciosa para uma explosão de  possibilidades como o emulador de Dreamcast, jogod do gta no PSVita e jogos do Sonic sendo portados, Piglet (biblioteca GLES 2.0) encontrado e o VitaGL sendo mais completo que nunca, tem tido uma mudança repentina na cena do PSVita apesar do fato de que o vita está perto de colocar o outro pé em sua cova devido aos recentes rumores sobre a PS Store fechando para o PSVita, o futuro não parece tão sombrio para o vita. (Que é o porque decidimos chamar o concurso de KyûHEN que significa mudança repentina)",
			aboutContent2:
				'Nós queremos ajudar a cena do Vita a perseguir aquela mudança crescendo o interesse sobre a cena homebrew com esse concurso. Chamar pessoas para criar novos conteúdos para o ps vita utilizando ferramentas como VitaGL, SDL, Unity, Piglet para jogos,e o vita/dolce SDK. Se você quer fazer parte da jornada e contribuir com o seu projeto, então seja benvindo ao concurso KyûHEN!',
			cimmerianDesc:
				'Eu sou um dos moderadores do Custom Protocol (Website francês de hacking e também antigo criador do GekiHEN). Eu amo usar o meu conhecimento para ajudar as pessoas navegando o cenario hacking do vita no discord do henkaku e do Vita Nuova e via as minhas guias de solução de problemas do Vita. Eu frequentemente contribuo para projetos homebrew com beta testing e tradução. Você pode me contatar via o meu Discord e Twitter.',
			oldGamingDesc:
				'O meu nome é Sandeep Rai name, também conhecido como “2 Old 4 Gaming” no Twitter e YouTube. Eu tenho sido um gamer pela maior parte da minha vida. Eu tenho boas memórias de estar sentado na frente da TV jogando Nes com o meu irmão, mas como um adulto eu descobri que gaming portatil é mais adequado a minha vida. O PlayStation Vita, com a sua variada biblioteca de games e portabilidade, tem sido o meu dispositivo de escolha quanto a gaming. A minha paixão pelo Vita e seus jogos me inspiraram a não apenas escrever uma serie de livros sobre a historia do sistema mas também começar o meu canal do YouTube. Você pode me achar no meu Twitter, e Youtube.',
			frangarcjDesc:
				'Um dos mantedores do VITASDK e o principal desenvolvedor do Retroarch PS Vita. Eu também estou envolvido no desenvolvimento do emulador Vita3K. Eu tenho sido ativo na cena desde a época do Rejuvenate mas a Vida Real tem reduzido o meu tempo disponível para desenvolvimento. Hoje em dia as minhas principais contribuições são ajudar e auxiliar outros desenvolvedores nos Discords do HENkaku e Vita Nuova. Você pode me achar no meu Twitter, e GitHub.',
		},
		details: {
			title: 'Detalhes',
			intro: {
				title: 'Introdução',
				content1:
					'O concurso vai durar 2 meses, até 27 de maio. Por meio desse concurso nós queremos promover criavidade e originalidade com o "Jogo Um" e "Jogo Dois". Nós unimos forças com um profissional do campo que publica jogos para o PSVita afim de também ajudar desenvolvedores amadores a crescer e melhorar suas habilidades com criticas de um expert naquele campo. No passado (era do PSP majoritariamente, junto com a era do PS3), a cena de hacking estava no seu pico com uma comunidade ativa, forums e lendas daquelas cenas (DarK Alex, ou geohot pra nomear alguns) nos alimentava com magica nas nossas mãos e levantava um grande interesse em hackear seus dispositivos sony. Conforme o tempo passa, com dispositivos como o PS4 e PS5 e a segurança se tornando progressivamente mais difícil, a atividade da comunidade de hacking diminuiu com a perda de sites importantes como qj.net or PSPGen. ',
				content2:
					'Esse concurso, com o envolvimento do Wololo, PSX-Place e PlayStationHaX é a ocasião para acender aquela chama perdida na nossa comunidade, e possivelmente levantar o interesse sobre hackear seus dispositivos novamente. Esse concurso nasceu da vontade da comunidade de haver uma após a recente melhora, e nós estamos tornando isso uma realidade. Mas para isso ter sucesso precisamos de você!',
			},
			process: {
				title: 'O processo',
				content: 'O concurso vai proceder via 3 simples passos:',
				step1:
					'Cada participante vai enviar seus projetos nas quatros categorias listadas abaixo. O concurso vai durar 2 meses, de 27 de março a 27 de maio.',
				step2:
					'Os jurados irão julgar os projetos e fazer seu proprio ranking por categoria, nós iremos juntar esses rankings para fazer uma avaliação geral do ranking.',
				step3:
					' A premiação vai ser dividida de acordo com o grafico da premiação que você encontra na seção de regras e informação.',
			},
			categories: {
				title: 'As quatro Categorias',
			},
			voting: {
				title: 'A Votação',
				content1:
					'Os jurados vão individualmente enviar um post explicando como eles fizeram seu ranking que vai cobrir o que eles gostaram, não gostaram, qualquer ideia de melhora e conselhos para o dito projeto.',
				content2:
					'Um ranking geral vai ser feito com todos os rankings dos jurados. O resultado será exibido no website do concurso.',
			},
			prizes: {
				title: 'Os Prêmios',
				contentStart: 'Nós iremos dividir a prêmiação coletado no',
				donationPlatform: 'nosso Ko-Fi',
				contentMiddle: ' (que começa com ',
				amountCollected: '455 $',
				contentEnd: ' graças aos nossos patrocinadores) entre as 4 categorias como mostrado abaixo.',
				conclusion:
					'Nós então iremos decidir o quanto nós dividimos entre uma categoria o 1° lugar, 2° lugar, 3° lugar (ou mais) dependendo do número de envios em cada categoria.',
			},
			rules: {
				title: 'As Regras',
				splashScreen:
					'Esse é o splashscreen que tem que ser usado na inicialização do seu jogo/homebrew/port:',
			},
			contact: {
				title: 'Contato',
				intro: 'Tem alguma pergunta sobre o concurso? Quer ter uma conversa com a gente?',
				contentStart: 'Você pode either enviar um e-mail para ',
				contentMiddle: ' ou uma DM no nosso Twitter ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Recursos',
			pageTitle: 'Ferramentas',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'Como configurar o Unity para o PS Vita',
				deployProject: 'Como facilmente implantar um projeto no PS Vita',
				gameMakerExportTool: 'Ferramenta de export PS Vita GameMaker Studio',
			},
			helpingTools: 'Ferramentas que fazem da sua vida um pouco mais fácil',
			debuggingTools: {
				title: 'Ferramentas de debugging úteis',
				gdbVita: 'GDB para o Vita (nada conveniente)',
			},
			discordServers: {
				title: 'Servidores do Discord úteis',
				henkakuSpecialities: 'majoritariamente VitaSDK',
				nuovaSpecialities: 'majoritariamente VitaSDK',
				cbpsSpecialities: 'majoritariamente DolceSDK/Unity/GameMaker',
			},
		},
		submissions: {
			title: 'Envios',
			temp: {
				contentStart: 'Já que o sistema de envio não está ainda completamente terminado, por favor use esse ',
				contentLink: 'Formulário do Google',
				contentEnd: ' por enquanto.',
				outro: "Nós estamos tentando termina-lo o mais rapido o possível.",
				thanks: 'Obrigado por sua compreeensão.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'em',
			bottom: 'breve...',
			detailsStart: 'A pagina de envio será aberta ',
			detailsDate: '8 de Abril',
			detailsEnd: '',
		},
	},
};
