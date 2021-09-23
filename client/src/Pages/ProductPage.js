import React, {Component} from 'react'
import {store} from "../index";

class ProductInfo extends Component {
    storeUnsubscribe;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            item: {}
        }
        const paths = window.location.pathname.split('/');
        this.itemId = paths[paths.length - 1];
    }

    componentDidMount() {
        this.storeUnsubscribe = store.subscribe(() => {

            const state = store.getState();

            this.setState({
                isLoaded: !state.isLoading,
                item: state.product
            });
        });

        store.dispatch({type: 'GET_PRODUCT', itemId: this.itemId});
    }

    componentWillUnmount() {
        this.storeUnsubscribe();
    }

    render() {
        const {item} = this.state;

        return (
            <>
                <div className='product'>
                    <div className='product-image'>
                        <img className='image-product'
                            src={item.imgSrc}
                            alt=""/>
                    </div>
                    <div className='product-info'>
                        <div className="info-item product-text">
                            <h1 className="product-title">{ item.title }</h1>
                            <p className="product">В составе: { item.composition }</p>
                            <p><strong>Дополнительно:</strong>
                                <br/>• от вашего имени мы можем подписать мини-открытку к букету (бесплатно).
                                <br/>
                                • добавить к букету стандартную коробочку конфет Рафаэлло (150,грн).
                                <br/>
                                • Доставить букет в крафтовой, непромокаемой вазе (50,грн)</p>
                        </div>
                        <div className="info-item product-commerce">
                            <div className="product-price">
                                <span className="price-amount">2,000</span> <span className="price-currency">грн</span>
                            </div>
                        </div>
                        <div className="info-item product-disclaimer">
                            <p className="disclaimer-text"><strong>Важно: </strong>
                                Создавая букеты и композиции, мы не копируем их, а собираем похожий по цветовой гамме,
                                настроению и максимально повторяя состав учитывая сезонность цветка.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductInfo