import './index.scss'

const generateDom = (html) => {
    const dom = document.createElement('div');
    dom.className = 'popup_wrapper';
    dom.innerHTML = html;

    return dom;
}


export const show = (option = {}) => {
    const html = `<div class="popup_box"><div class="popup_header">${option.title}</div>
<div class="popup_content">${option.content}</div>
<div class="popup_footer">
    <button type="button" class="popup_footer_button_confirm">确定</button>
    <button type="button" class="popup_footer_button_cancel">取消</button>
</div></div>`


    document.querySelector('body').appendChild(generateDom(html));

    document.querySelector('.popup_footer_button_confirm').addEventListener('click', () => {
        option.confirm();
        document.querySelector('.popup_wrapper').remove();
    });
    document.querySelector('.popup_footer_button_cancel').addEventListener('click', () => {
        option.cancel();
        document.querySelector('.popup_wrapper').remove();

    })

};


console.log("popup is ok");
