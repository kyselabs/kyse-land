import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    lng: 'br',
    resources: {
        br: {
            translation: {
                intro: 'Analisador de Pacotes, Códigos e Ambientes.',
                analyzer: 'Analisa pacotes de',
                'try for free': 'Avaliar gratuitamente',

                'pricing packages': 'Análise de Pacotes',
                'pricing source': 'Análise de Código-Fonte',
                'pricing containers': 'Análise de Contêineres',
                'pricing free': 'Grátis',
                'pricing buy': 'Comprar',
                'pricing contact': 'Entrar em contato',
                'pricing tests': 'testes/mês',
                'pricing unlimited': 'Sem limite',
                'pricing custom': 'Personalizado',
                'pricing soon': 'Em breve',
                'pricing popular': 'Mais popular',

                newsletter: 'Newsletter',
                'newsletter tip': 'Assine e fique por dentro das últimas novidades!',
                'newsletter your email': 'Seu e-mail',
                'newsletter sign up': 'Assinar',
                'newsletter signed up':
                    'Parabéns! Agora você receberá nossas atualizações por e-mail!',

                copyright: 'Kyse Security do Brasil LTDA. Todos os direitos reservados',
            },
        },
    },
})
