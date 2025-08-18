const SimpleGridStats = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl text-text-primary">
          I Numeri della Nostra Esperienza
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div className="text-center">
            <p className="text-sm font-medium text-secondary">
              Anni di Esperienza
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10" style={{ color: '#2D5016' }}>38+</p>
            <p className="text-2xl font-semibold text-secondary">
              nel settore agricolo italiano
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-secondary">
              Clienti Soddisfatti
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10" style={{ color: '#2D5016' }}>2.500+</p>
            <p className="text-2xl font-semibold text-secondary">
              in tutta Italia
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-secondary">
              Ettari Serviti
            </p>
            <p className="pt-4 text-7xl font-semibold lg:pt-10" style={{ color: '#2D5016' }}>15.000+</p>
            <p className="text-2xl font-semibold text-secondary">
              ogni anno
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SimpleGridStats };