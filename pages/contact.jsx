import React, { Component} from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'customer[name]': '',
            'customer[phone]': '',
            'customer[email]': '',
            'messages': '',
        }
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleCaptureSuccess = this.handleCaptureSuccess.bind(this);
        this.handleCaptureError = this.handleCaptureError.bind(this);
    }

    handleChangeForm(e) {
        if (e.target.name === 'cardNumber') {
        e.target.value = ccFormat(e.target.value)
        }
        this.setState({
        [e.target.name]: e.target.value,
        });
    }
    handleCaptureSuccess(result) {
        this.props.router.push('/checkout/confirm');
    };

    handleCaptureError(result) {
        // Clear the initial loading state
        this.setState({ loading: false });
    
        let errorToAlert = '';
    
        // If errors are passed as strings, output them immediately
        if (typeof result === 'string') {
          alert(result);
          return;
        }
    
        const { data: { error = {} } } = result;
    
        // Handle any validation errors
        if (error.type === 'validation') {
          console.error('Error while capturing order!', error.message);
    
          if (typeof error.message === 'string') {
            alert(error.message);
            return;
          }
    
          error.message.forEach(({param, error}, i) => {
            this.setState({
              errors: {
                ...this.state.errors,
                [param]: error
              },
            });
          })
    
          errorToAlert = error.message.reduce((string, error) => {
            return `${string} ${error.error}`
          }, '');
        }
    
        // Handle internal errors from the Chec API
        if (['gateway_error', 'not_valid', 'bad_request'].includes(error.type)) {
          this.setState({
            errors: {
              ...this.state.errors,
              [(error.type === 'not_valid' ? 'fulfillment[shipping_method]' : error.type)]: error.message
            },
          })
          errorToAlert = error.message
        }
    
        // Surface any errors to the customer
        if (errorToAlert) {
          alert(errorToAlert);
        }
      };

    render() {
        return(
            <Root>
                <Head>
                <title>ALLES | Liên hệ</title>
                </Head>
                <div className="about-container" >
                <div className="row " style={{paddingTop:'80px'}}>
                    <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content" style={{paddingTop: '100px'}}>
                        <div className=" d-flex flex-column py-5 px-4 px-sm-5 justify-content-center ">
                        <h2 className="font-size-header mb-4">
                            Liên hệ
                        </h2>
                        <h4 className="font-size-subheader mb-4">
                        Tell us what you think. We’d love to hear from you.
                        We’ll get back to you as soon as we can!
                        </h4>

                        </div>
                    </div>

                    <div className="col-12 col-lg-6 offset-md-1 offset-lg-0 row-content py-5">
                        <div className="d-flex flex-column px-4 px-sm-5 justify-content-center">
                        <form onChange={this.handleChangeForm} onSubmit={this.captureOrder}>
                            <p className="font-size-subheader font-weight-semibold mb-4">
                                Thông tin khách hàng
                            </p>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="w-100">
                                    <p className="mb-1 font-size-caption font-color-light">
                                        Họ và tên*
                                    </p>
                                    <input required autoComplete="given-name" value={this.state['customer[first_name]']} className="rounded-0 w-100" />
                                    </label>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <label className="w-100">
                                    <p className="mb-1 font-size-caption font-color-light">
                                        Số điện thoại*
                                    </p>
                                    <input required  autoComplete="family-name" value={this.state['customer[last_name]']} className="rounded-0 w-100" />
                                    </label>
                                </div>
                                <div className="col-12 mb-3">
                                    <label className="w-100">
                                    <p className="mb-1 font-size-caption font-color-light">
                                        Email
                                    </p>
                                    <input required  autoComplete="name"  className="rounded-0 w-100" />
                                    </label>
                                </div>
                                <label className="col-12 w-100 mb-3">
                                    <p className="mb-1 font-size-caption font-color-light">
                                        Lời nhắn*
                                    </p>
                                    <textarea name="orderNotes" value={this.state['messages[body]']} className="rounded-0 w-100" />
                                </label>

                            </div>
                            <button
                                type="submit"
                                className=" bg-black font-color-white w-100 border-none h-56 font-weight-semibold d-lg-block"
                                    >
                                    Gửi
                                </button>
                        </form>
                        </div>
                    </div>
                </div>

                </div>
                <Footer />
            </Root>
        )
}
}

export default Contact;