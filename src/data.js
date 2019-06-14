const Data = {
    nav: {
        id: '001',
        left: {},
        center: [
            {
                id: '004',
                name: 'Home',
                path: '/'
            },
            {
                id: '005',
                name: 'About',
                path: '/about'
            },
            {
                id: '006',
                name: 'Events',
                path: '/events'
            },
            {
                id: '007',
                name: 'Join us!',
                path: '/join'
            },
        ],
        right:{
            id: '008',
            name: 'Log in',
            path: '/login'
        },
    },

    footer: {
        id: '003',
        socialMedia: {
            id: '013',
            title: 'Follow us on social media:',
            links: [
                {
                    id: '016',
                    name: 'Facebook',
                    href: 'https://www.facebook.com/',
                    icon: '<i class="fab fa-facebook-square"></i>'
                },
                {
                    id: '017',
                    name: 'Instagram',
                    href: 'https://www.instagram.com/',
                    icon: '<i class="fab fa-instagram"></i>'
                },
                {
                    id: '018',
                    name: 'LinkedIn',
                    href: 'https://www.instagram.com/',
                    icon: '<i class="fab fa-linkedin"></i>'
                },
                {
                    id: '019',
                    name: 'Medium',
                    href: 'https://www.medium.com/',
                    icon: '<i class="fab fa-medium"></i>'
                },
                {
                    id: '020',
                    name: 'Twitter',
                    href: 'https://www.twitter.com/',
                    icon: '<i class="fab fa-twitter-square"></i>'
                }
            ],
        },
        map: {
            id: '014',
        },
        copyrightAndCities: {
            id: '015',
            copyright: 'Think Tank United',
            cities: ['Amsterdam', 'Helsinki']
        },
    },

    pages: [
        {
            id: '004',
            name: 'Home',
            path: '/',
            header: {
                id: '005',
                title: 'Think Tank United',
                subtitle: 'is a curated community of leaders and influencers that positively impact the world',
                button: {
                    text: 'Join TTU now!',
                    to: '/join',
                },
                image: null,
            },
            main: [
                {
                    id: '006',
                    type: 'textInThreeColumns',
                    title: 'Who are we?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of ‘<strong>Controlled Chaos</strong>’. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
                {
                    id: '007',
                    type: 'textInThreeColumns',
                    title: 'What do we do?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of ‘<strong>Controlled Chaos</strong>’. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
                {
                    id: '008',
                    type: 'textInThreeColumns',
                    title: 'Why do we do it?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of ‘<strong>Controlled Chaos</strong>’. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
            ]
        },
        {
            id: '009',
            name: 'About',
            path: '/about',
            header: {},
            main: {},
        },
        {
            id: '010',
            name: 'Events',
            path: '/events',
            header: {},
            main: {},
        },
        {
            id: '011',
            name: 'Join us!',
            path: '/join',
            header: {},
            main: {},
        },
        {
            id: '012',
            name: 'Log in',
            path: '/login',
            header: {},
            main: {},
        },
    ]
}

export default Data;
