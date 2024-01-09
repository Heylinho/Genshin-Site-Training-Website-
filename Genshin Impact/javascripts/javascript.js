//Algumas Variaveis
var iframeprincipal = document.getElementById('iframe-principal')
var creator = document.getElementById('creator')
var divstickers = document.getElementById('div-stickers')
var home = document.getElementById('home')
var god = document.getElementById('god')
var footer = document.getElementById('footer')

//Todos os Stickers
const sticker1 = document.getElementById('sticker1')
const sticker2 = document.getElementById('sticker2')
const sticker3 = document.getElementById('sticker3')

//Raiden Shogun ----------------------------------------------------------------------------------------------
const btnRaiden = document.getElementById('btnRaiden');
btnRaiden.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/tray_large.png?fb4eb30007d3924bc7ffa7a80c96cbbf'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_1.png?fb4eb30007d3924bc7ffa7a80c96cbbf'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_9.png?fb4eb30007d3924bc7ffa7a80c96cbbf&d=200x200'
    iframeprincipal.src = 'raiden.html'
    main.style.backgroundImage = 'url("")'

        if(creator.style.display === '' ){
            creator.style.display = 'none';
            divstickers.style.display = 'flex';
        }

        if (footer.style.height === '') {
            footer.style.height = '15%';
        }

        if(home.style.display === '' ){
            home.style.display = 'none';
            god.style.display = 'block';
        }
})

const cardraiden = document.querySelector('.card-raiden');
cardraiden.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/tray_large.png?fb4eb30007d3924bc7ffa7a80c96cbbf'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_1.png?fb4eb30007d3924bc7ffa7a80c96cbbf'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_9.png?fb4eb30007d3924bc7ffa7a80c96cbbf&d=200x200'
    iframeprincipal.src = 'raiden.html'
    main.style.backgroundImage = 'url("")'

        if(creator.style.display === '' ){
            creator.style.display = 'none';
            divstickers.style.display = 'flex';
        }

        if (footer.style.height === '') {
            footer.style.height = '15%';
        }

        if(home.style.display === '' ){
            home.style.display = 'none';
            god.style.display = 'block';
        }
})


//Zhongli -------------------------------------------------------------------------------------------------------
const btnZhongli = document.getElementById('btnZhongli');
btnZhongli.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_1.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_5.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_15.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    iframeprincipal.src = 'zhongli.html'
    main.style.backgroundImage = 'url("")'

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '15%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})

const cardzhongli = document.querySelector('.card-zhongli');
cardzhongli.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_1.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_5.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-zhongli/sticker_15.png?fbce3c908d9ad9c4e5e1a7f9e7e3d0a3&d=200x200'
    iframeprincipal.src = 'zhongli.html'
    main.style.backgroundImage = 'url("")'

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '15%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})


//Nahida -----------------------------------------------------------------------------------------------------------
const btnNahida = document.getElementById('btnNahida');
btnNahida.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_8.png?313425cbc42db6323129af457e1b367c&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_7.png?313425cbc42db6323129af457e1b367c&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_5.png?313425cbc42db6323129af457e1b367c&d=200x200'
    iframeprincipal.src = 'nahida.html'
    main.style.backgroundImage = 'url("")';

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '15%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})

const cardnahida = document.querySelector('.card-nahida');
cardnahida.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_8.png?313425cbc42db6323129af457e1b367c&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_7.png?313425cbc42db6323129af457e1b367c&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-nahida/sticker_5.png?313425cbc42db6323129af457e1b367c&d=200x200'
    iframeprincipal.src = 'nahida.html'
    main.style.backgroundImage = 'url("")';

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '15%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})


//Furina --------------------------------------------------------------------------------------------------------------
const btnFurina = document.getElementById('btnFurina');
btnFurina.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_2.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_4.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_1.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    iframeprincipal.src = 'furina.html'
    main.style.backgroundImage = 'url("")';

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '15%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})

const cardfurina = document.querySelector('.card-furina');
cardfurina.addEventListener('click', function(){
    sticker1.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_2.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    sticker2.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_4.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    sticker3.src = 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-furina/sticker_1.png?68f63bbc1d6e6364cc00236bdfde6367&d=200x200'
    iframeprincipal.src = 'furina.html'
    main.style.backgroundImage = 'url("")'

    if(creator.style.display === ''){
        creator.style.display = 'none';
        divstickers.style.display = 'flex';
    }

    if (footer.style.height === '') {
        footer.style.height = '20%';
    }

    if(home.style.display === '' ){
        home.style.display = 'none';
        god.style.display = 'block';
    }
})

//Logo ------------------------------------------------------------------------------------------------------------------
const logo = document.querySelector('#logo');
logo.addEventListener('click', function(){

    location.reload();
})