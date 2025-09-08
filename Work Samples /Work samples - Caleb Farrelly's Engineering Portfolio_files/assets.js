(function (global) {
      ["assets/index-Df-EGDN7.js","assets/polyfills-D8cAM6yg.js"].forEach(function (src) {
      const script = document.createElement('script');
      script.crossOrigin = 'anonymous';
      script.type = 'module';
      script.src = 'https://assets.digication.com/reflect-web/' + src;
      document.body.appendChild(script);
    });
      ["assets/index-C3IG_SVy.css"].forEach(function (src) {
      const link = document.createElement('link');
      link.setAttribute('href', 'https://assets.digication.com/reflect-web/' + src);
      link.setAttribute('rel', 'stylesheet');
      document.head.appendChild(link);
    });
    })(window || global);