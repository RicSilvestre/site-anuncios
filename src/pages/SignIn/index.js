import React from 'react'
import {PageArea} from './styled'
import {PageContainer, PageTitle, ErrorMessage} from '../../components/MainComponents'
import useApi from '../../helpers/OlxAPI'
import {doLogin} from '../../helpers/AuthHandler'

const Page = () => {
    const api = useApi()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rememberPass, setRememberPass] = React.useState(false)
    const [disabled, setDisabled] = React.useState(false)
    const [error, setError] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true)

        const json = await api.login(email, password)

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPass);
            window.location.href = '/'
        }

        setDisabled(false)
    }


    return (
        <div>
            <PageContainer>
                <PageTitle>Login</PageTitle>
                <PageArea>
                    {error && <ErrorMessage>{error}</ErrorMessage> }
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area-title">E-mail</div>
                            <div className="area-input">
                                <input type="email" disabled={disabled} value={email} onChange={e => setEmail(e.target.value)} required/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Senha</div>
                            <div className="area-input">
                                <input type="password" disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} required/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title">Lembrar Senha</div>
                            <div className="area-input">
                                <input type="checkbox" disabled={disabled} checked={rememberPass} onChange={() => setRememberPass(!rememberPass)}/>
                            </div>
                        </label>
                        <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <button>Fazer Login</button>
                            </div>
                        </label>
                    </form>
                </PageArea>
            </PageContainer>
            
        </div>
    )
}

export default Page
