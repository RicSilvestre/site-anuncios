import styled from 'styled-components';

export const HeaderArea = styled.div`
    height: 100px;
    background-color: #CCC;

    a {
        text-decoration: none;
    }

    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
        background-color: #FFFAAA
    }

    .logo {
        display: flex;
        flex: 1;
        align-items: center;
        

        .logo-1 {
            font-size: 27px;
            font-weight: bold;
            color: #FF0000
            
        }
    }

    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin: 0 20px;

            a, button {
                border: 0;
                background: none;
                text-decoration: none;
                color: #000;
                font-size: 14px;
                cursor: pointer;
                outline: 0;

                &:hover {
                    color: #333
                }

                &.button {
                    background-color: #FF8100;
                    border-radius: 4px;
                    color: #FFF;
                    padding: 5px 10px;
                }

                &.button:hover {
                    /* background-color: #E577 */
                    background-color: #E57760
                }
            }
        }
    }
` 