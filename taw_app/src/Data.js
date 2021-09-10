const BulletinList = [
    {
        'no' : 1,
        'title' : '첫번째 게시글입니다.',
        'writer' : '첼꿍',
        'createDate' : '2021-09-10',
        'commentCount' : 10,
        'readCount' : 50
    },
    {
        'no' : 2,
        'title' : '두번째 게시글입니다.',
        'writer' : '체리',
        'createDate' : '2021-09-10',
        'commentCount' : 20,
        'readCount' : 60
    },
    {
        'no' : 3,
        'title' : '세번째 게시글입니다.',
        'writer' : '체체',
        'createDate' : '2021-09-10',
        'commentCount' : 30,
        'readCount' : 70
    },
    {
        'no' : 4,
        'title' : '네번째 게시글입니다.',
        'writer' : '체리리',
        'createDate' : '2021-09-10',
        'commentCount' : 40,
        'readCount' : 80
    },

];

const getPostByNo = (no) => {
    const array = BulletinList.filter( x => x.no === no);
    if( array.length === 1 ){
        return array[0];
    }
    return null;
}

export {
    BulletinList, getPostByNo
};