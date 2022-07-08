import './Form.scss';
import Signup from '../Signup/Signup';
import Forgotpassword from '../Forgotpassword/Forgotpassword';

const Form = (props) => {
    return <div className="Form container-fluid">
        <section className="row form-row justify-content-center ">
            <section className="col-12 col-sm-4 col-md-4 form-main-page">
                <h1 className="text-center form-header mt-5"> Bookit</h1>
                {props?.path === "sign-up" && <Signup />}
                {props?.path === "forgot-password" && <Forgotpassword />}
            </section>
        </section>
    </div>
}

export default Form;