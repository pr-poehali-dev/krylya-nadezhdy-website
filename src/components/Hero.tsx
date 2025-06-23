const Hero = () => {
  return (
    <section
      className="bg-gradient-to-br from-sky-400 to-sky-500 py-16 px-4"
      role="main"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Добро пожаловать на портал
            <br />
            <span className="text-sky-200">«Название»</span>
          </h2>
          <p className="text-xl text-sky-50 max-w-3xl mx-auto leading-relaxed">
            Общедоступный портал полезной информации для специалистов и
            родителей детей с особыми образовательными потребностями
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
