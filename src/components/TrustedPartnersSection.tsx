const partners = [
  { name: "Hettich", src: "/trusted-partners/hettich.webp", compact: true },
  { name: "Faber", src: "/trusted-partners/faber.webp" },
  { name: "Asian Paints", src: "/trusted-partners/asian-paints.webp" },
  { name: "Blum", src: "/trusted-partners/blum.webp", compact: true },
  { name: "Elica", src: "/trusted-partners/elica.webp", compact: true },
];

const logoClassName = (partner: (typeof partners)[number]) =>
  [
    partner.compact && "trusted-partners__logo-image--compact",
    partner.name === "Hettich" && "trusted-partners__logo-image--hettich",
    `trusted-partners__logo-image--${partner.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
  ].filter(Boolean).join(" ");

const logoItemClassName = (partner: (typeof partners)[number]) =>
  [
    "trusted-partners__logo",
    `trusted-partners__logo--${partner.name.toLowerCase().replace(/[^a-z]+/g, "-")}`,
  ].join(" ");

export default function TrustedPartnersSection() {
  return (
    <section className="trusted-partners" aria-labelledby="trusted-partners-heading">
      <div className="trusted-partners__inner">
        <h2 id="trusted-partners-heading">Brands We Trust</h2>
      </div>
      <div className="trusted-partners__marquee">
        <div className="trusted-partners__track">
          {partners.map((partner) => (
            <div className={`${logoItemClassName(partner)} trusted-partners__logo--desktop`} key={partner.name}>
              <img className={logoClassName(partner)} src={partner.src} alt={partner.name} />
            </div>
          ))}
          {[...partners, ...partners].map((partner, index) => (
            <div className={logoItemClassName(partner)} key={`${partner.name}-${index}`}>
              <img className={logoClassName(partner)} src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
