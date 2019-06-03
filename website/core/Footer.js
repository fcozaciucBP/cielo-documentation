/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Soluções</h5>
            <a href="#">Vendas na Web</a>
            <a href="#">Pagamentos no seu App</a>
            <a href="#">App nas máquinas da Cielo</a>
          </div>
          <div>
            <h5>Plataformas</h5>
            <a href="#">Cielo Lio</a>
            <a href="#">Cielo E-Commerce</a>
            <a href="#">Pagamento por Link</a>
            <a href="#">Cielo ID Parceiros</a>
          </div>
          <div>
            <h5>Desenvolvedor</h5>
            <a href="#">Cadastrar Client-ID</a>
            <a href="#">Client-ID Cadastrados</a>
            <a href="#">Swagger</a>
            <a href="#">Solicitar Tokens</a>
          </div>
          <div>
            <h5>Suporte</h5>
            <a href="#">Documentação</a>
            <a href="#">FAQ</a>
            <a href="#">Chat</a>
          </div>
        </section>
        <section className="end-page">
          <a
            href={`${this.props.config.baseUrl}`}
            target="_blank"
            rel="noreferrer noopener"
            className="fbOpenSource"
          >
            <img
              src={`${this.props.config.baseUrl}img/logo-cielo-pb.png`}
              alt="Facebook Open Source"
              width="106"
              height="35"
            />
          </a>
          <section className="copyright">{this.props.config.copyright}</section>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
