import React, { useEffect, useState } from 'react';

interface Product {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

function ShopApi() {
  const [store, setStore] = useState<Product[]>([]);

  useEffect(() => {
    const storeFetch = async () => {
      const req = await fetch('https://fakestoreapi.com/products');
      const data = await req.json();
      setStore(data);
    };
    storeFetch();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#343a40' }}>E-Commerce Store</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {store.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderBottom: '1px solid #ddd',
              }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: '1.4em',
                  marginBottom: '10px',
                  color: '#343a40',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {product.title}
              </h2>
              <p style={{ color: '#6c757d', fontSize: '0.9em', marginBottom: '15px' }}>
                Category: <strong>{product.category}</strong>
              </p>
              <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '15px', color: '#007BFF' }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1em',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopApi;
