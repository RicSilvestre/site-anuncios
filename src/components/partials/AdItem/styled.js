import style from 'styled-components';

export const Item = style.div`
a {
    display: block;
    border: 1px solid #CCC;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;

    .itemImage img {
        width: 100%;
        border-radius: 5px;
    }

    .itemName {
        color: #000;
        font-weight: bold;
    }

}`