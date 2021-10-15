
import userPic from './profile-pic/user.png';
import userPic1 from './profile-pic/IMG_5925.JPG';
const data =[
    {
        "id":0,
        "username":"admin",
        "password":"admin",
        "rank":"Beginner",
        "date-joined":"09/28/2021",
        "point":0,
        "image":userPic,
        "tasks":[
            {
                "id":1,
                "title":"Task1",
                "date":"09/28/2021",
                "priority":"low",
                "note":"This is just a test"
            },
            {
                "id":2,
                "title":"Task2",
                "date":"09/28/2021",
                "priority":"medium",
                "note":"This is just a test"
            },
            {
                "id":3,
                "title":"Task3",
                "date":"09/28/2021",
                "priority":"high",
                "note":"This is just a test"
            }
        ]
    },
    {
        "id":1,
        "username":"BorzooMV",
        "password":"ostadekar",
        "rank":"Advance",
        "date-joined":"09/20/2021",
        "point":1000,
        "image":userPic1,
        "tasks":[
            {
                "task-title":"Test",
                "date":"09/29/2021",
                "priority":"High"
            }
        ]
    }
    
]

export default data;