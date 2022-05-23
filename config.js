var obj = {
    name: 'Page',
    attributes: {
        title: 'title',
        desciption: '描述'
    },
    children: [
        {
            name: 'CourseList',
            attributes: {},
            children: [
                {
                    name: 'Course',
                    attributes: {
                        title: 'Vue 3 系统实战',
                        desciption: '描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据描述模拟数据'
                    },
                    link: ''
                }
            ]
        }
    ]
}

const schema = {
    name: 'Page',
    attributes: {},
    children: [
        {
            name: 'Banner',
            attributes: {
                title: '标题1',
                desciption: '描述'
            }
        },
        {
            name: 'CourseList'
        },
        {
            name: 'Footer'
        },
        {
            name: 'Area'
        },
        {
            name: 'Area'
        }
    ]
}