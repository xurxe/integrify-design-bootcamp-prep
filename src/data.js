const Data = {
    nav: {
        id: '001',
        left: {},
        center: [
            {
                id: '004',
                name: 'Home',
                slug: ''
            },
            {
                id: '005',
                name: 'About',
                slug: 'about'
            },
            {
                id: '006',
                name: 'Events',
                slug: 'events'
            },
            {
                id: '007',
                name: 'Join us!',
                slug: 'join'
            },
        ],
        right:{
            id: '008',
            name: 'Log in',
            slug: 'login'
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
                    icon: '<i aria-hidden="true" class="fab fa-facebook-square"></i>'
                },
                {
                    id: '017',
                    name: 'Instagram',
                    href: 'https://www.instagram.com/',
                    icon: '<i aria-hidden="true" class="fab fa-instagram"></i>'
                },
                {
                    id: '018',
                    name: 'LinkedIn',
                    href: 'https://www.instagram.com/',
                    icon: '<i aria-hidden="true" class="fab fa-linkedin"></i>'
                },
                {
                    id: '019',
                    name: 'Medium',
                    href: 'https://www.medium.com/',
                    icon: '<i aria-hidden="true" class="fab fa-medium"></i>'
                },
                {
                    id: '020',
                    name: 'Twitter',
                    href: 'https://www.twitter.com/',
                    icon: '<i aria-hidden="true" class="fab fa-twitter-square"></i>'
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
            slug: '',
            header: {
                id: '005',
                title: '<strong>Think Tank United</strong> is a curated community of leaders and influencers that positively impact the world',
                pill: {
                    text: 'Join TTU now!',
                    path: '/join',
                },
                image: null,
            },
            main: [
                {
                    id: '006',
                    type: 'titlesAndThreeColumns',
                    title: 'Who are we?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of <strong>‘Controlled Chaos’</strong>. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
                {
                    id: '007',
                    type: 'titlesAndThreeColumns',
                    title: 'What do we do?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of ‘<strong>Controlled Chaos</strong>’. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
                {
                    id: '008',
                    type: 'titlesAndThreeColumns',
                    title: 'Why do we do it?',
                    subtitle: 'TTU is a weird collection of entrepreneurs, technologists, artists, professors and other misfits with a <strong>unique world view</strong>.',
                    column1: 'So what connects our tribe? <strong>Synergy</strong>. The belief that bringing together creative minds from widely varying disciplines largely increases the potential of those involved.',
                    column2: 'The world around us is changing rapidly and some challenges we can only tackle when we’re united. TTU facilitates events where wide-ranging bright minds connect personally to <strong>share thoughts, insights, and ideas</strong>.',
                    column3: 'TTU is built around the concept of ‘<strong>Controlled Chaos</strong>’. We curate and connect high-quality members in our TTU format (control) and observe the surprising and often innovative solutions they come up with (chaos).',
                },
                {
                    id: '021',
                    type: 'events',
                    title: 'Events',
                    subtitle: 'Search for upcoming events by location, name, or TTU members:',
                    events: [
                        {
                            id: '023',
                            dateTime: '2019-06-26T18:00:00+02:00',
                            venue: 'The Thinking Hut',
                            city: 'Amsterdam',
                            country: 'The Netherlands',
                            pill: {
                                text: 'Join!',
                                path: '/events/ams-jun-2019',
                            },
                        },
                        {
                            id: '024',
                            dateTime: '2019-07-17T18:00:00+03:00',
                            venue: 'Integrify',
                            city: 'Helsinki',
                            country: 'Finland',
                            pill: {
                                text: 'Join!',
                                path: '/events/hki-jul-2019',
                            },
                        },
                        {
                            id: '025',
                            dateTime: '2019-08-26T18:00:00+02:00',
                            venue: 'The Thinking Hut',
                            city: 'Amsterdam',
                            country: 'The Netherlands',
                            pill: {
                                text: 'Join!',
                                path: '/events/ams-aug-2019',
                            },
                        },
                        {
                            id: '026',
                            dateTime: '2019-09-17T18:00:00+03:00',
                            venue: 'Integrify',
                            city: 'Helsinki',
                            country: 'Finland',
                            pill: {
                                text: 'Join!',
                                path: '/events/hki-sep-2019',
                            },
                        },
                        {
                            id: '027',
                            dateTime: '2019-10-26T18:00:00+02:00',
                            venue: 'The Thinking Hut',
                            city: 'Amsterdam',
                            country: 'The Netherlands',
                            pill: {
                                text: 'Join!',
                                path: '/events/ams-oct-2019',
                            },
                        },
                    ]
                },
                {
                    id: '022',
                    type: 'members',
                    title: 'Selected TTU members',
                    members: [
                        {
                            id: '028',
                            image: 'portrait1.jpg',
                            name: 'Miep Modaal',
                            position: 'Board Member',
                            company: 'Unilever',
                        },
                        {
                            id: '029',
                            image: 'portrait2.jpg',
                            name: 'Jan Publiek',
                            position: 'CEO',
                            company: 'ING Group'
                        },
                        {
                            id: '030',
                            image: 'portrait3.jpg',
                            name: 'Janina Kowalska',
                            position: 'CEO',
                            company: 'Eleks'
                        },
                        {
                            id: '031',
                            image: 'portrait1.jpg',
                            name: 'Maija Meikäläinen',
                            position: 'Spokesperson',
                            company: 'Rovio'
                        },
                        {
                            id: '032',
                            image: 'portrait2.jpg',
                            name: 'Totti Teikäläinen',
                            position: 'CFO',
                            company: 'Nokia'
                        },
                        {
                            id: '033',
                            image: 'portrait3.jpg',
                            name: 'Janina Kowalska',
                            position: 'CEO',
                            company: 'Eleks'
                        },
                        {
                            id: '031',
                            image: 'portrait1.jpg',
                            name: 'Maija Meikäläinen',
                            position: 'Spokesperson',
                            company: 'Rovio'
                        },
                        {
                            id: '032',
                            image: 'portrait2.jpg',
                            name: 'Totti Teikäläinen',
                            position: 'CFO',
                            company: 'Nokia'
                        },
                        {
                            id: '033',
                            image: 'portrait3.jpg',
                            name: 'Janina Kowalska',
                            position: 'CEO',
                            company: 'Eleks'
                        },
                    ]
                },
            ]
        },
        {
            id: '009',
            name: 'About',
            slug: 'about',
            header: {},
            main: {},
        },
        {
            id: '010',
            name: 'Events',
            slug: 'events',
            header: {},
            main: {},
        },
        {
            id: '011',
            name: 'Join us!',
            slug: 'join',
            header: {},
            main: {},
        },
        {
            id: '012',
            name: 'Log in',
            slug: 'login',
            header: {},
            main: {},
        },
    ]
}

export default Data;
