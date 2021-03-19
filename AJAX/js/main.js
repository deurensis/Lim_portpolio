var vm = new Vue({
    el: 'app',
    data: {
        header: [
            {
                name: '이름',
                sub1: '성별',
                sub2: '국어',
                sub3: '국사',
                sub4: '수학',
                sub5: '영어',
                sub6: '화학',
            }
        ],
        number: [
            {
                name: '이인포',
                gender: '남자',
                kor: 98,
                his: 85,
                meth: 100,
                eng: 75,
                che: 70,
            }
        ]
    }
})