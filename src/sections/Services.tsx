import { services, Service } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service: Service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
