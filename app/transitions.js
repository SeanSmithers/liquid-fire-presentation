export default function() {

  this.setDefault({'duration': 500});

  this.transition(
    this.fromRoute('intro'),
    this.toRoute('what'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('what'),
    this.toRoute('predefined-animations'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('predefined-animations'),
    this.toRoute('transition-map'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('transition-map'),
    this.toRoute('template-helpers.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('template-helpers.index'),
    this.toRoute('template-helpers.liquid-bind'),
    this.use('explode', {
      pickOld: 'h1',
      use: ['toUp', { duration: 500 }]
    }, {
      pickNew: 'h1',
      use: ['toDown', { duration: 500 }],
    }, {
      use: ['fade', { duration: 250 }]
    }),
    this.reverse('explode', {
      pickOld: 'h1',
      use: ['toUp', { duration: 500 }]
    }, {
      pickNew: 'h1',
      use: ['toDown', { duration: 500 }],
    }, {
      use: ['fade', { duration: 250 }]
    })
  );

  this.transition(
    this.fromRoute('template-helpers.liquid-bind'),
    this.toRoute('template-helpers.liquid-if'),
    this.use('explode', {
      pickOld: 'h1',
      use: ['toUp', { duration: 1000 }]
    }, {
      pickNew: 'h1',
      use: ['toDown', { duration: 500 }],
    }, {
      use: ['fade', { duration: 250 }]
    }),
    this.reverse('explode', {
      pickOld: 'h1',
      use: ['toUp', { duration: 500 }]
    }, {
      pickNew: 'h1',
      use: ['toDown', { duration: 500 }],
    }, {
      use: ['fade', { duration: 250 }]
    })
  );

  this.transition(
    this.fromRoute('template-helpers.liquid-if'),
    this.toRoute('custom-animations'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('custom-animations'),
    this.toRoute('custom-animations-2'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.fromRoute('custom-animations-2'),
    this.toRoute('outro'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('outro'),
    this.toRoute('intro'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // BEGIN-SNIPPET liquid-bind-map
  this.transition(
    this.childOf('#liquid-bind-demo'),
    this.use('toUp')
  );
  // END-SNIPPET

  // BEGIN-SNIPPET liquid-if-map
  this.transition(
    this.hasClass('liquid-if-demo'),
    this.toValue(false),
    this.use('toUp'),
    this.reverse('crossFade')
  );
  // END-SNIPPET
}
