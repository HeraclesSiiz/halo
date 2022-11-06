const releaseNotesSrc = `(function (w, d, s, o, f, js, fjs) { w['ReleaseNotesWidget'] = o; w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }; js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]; js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs); }
        (window, document, 'script', 'rnw', 'https://s3.amazonaws.com/cdn.releasenotes.io/v1/bootstrap.js'));

    rnw('init', {
        account: 'halosolutions.releasenotes.io',
        selector: '.rn-badge',
    });`

export {releaseNotesSrc}