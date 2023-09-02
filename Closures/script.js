(
    function ()
    {
        const k=document.querySelector('h1');
        k.style.color='red';
        k.style.fontSize='larger'
        document.querySelector('body').addEventListener('click',function (){
        k.style.color='blue';})
    }
)()