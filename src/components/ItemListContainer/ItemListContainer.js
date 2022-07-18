import './ItemListContainer.scss';

const ItemListContainer = ({ sectionTitle }) => {
    return (
        <section className='section item-list-container'>
            <div className='container'>
                <h2 className='item-list-container__title'>{sectionTitle}</h2>
                <div className='item-list-container__grid'>

                    <article className='product-card'>
                        <div className='product-card__image'>
                        </div>
                        <div className='product-card__content'>
                            <h4>Product price</h4>
                            <span>Category</span>
                        </div>
                    </article>

                    <article className='product-card'>
                        <div className='product-card__image'>
                        </div>
                        <div className='product-card__content'>
                            <h4>Product price</h4>
                            <span>Category</span>
                        </div>
                    </article>

                    <article className='product-card'>
                        <div className='product-card__image'>
                        </div>
                        <div className='product-card__content'>
                            <h4>Product price</h4>
                            <span>Category</span>
                        </div>
                    </article>

                    <article className='product-card'>
                        <div className='product-card__image'>
                        </div>
                        <div className='product-card__content'>
                            <h4>Product price</h4>
                            <span>Category</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ItemListContainer;