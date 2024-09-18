import stylelintConfigStandard from 'stylelint-config-standard';
import stylelintScss from 'stylelint-scss';
import stylelintOrder from 'stylelint-order';

export default {
    extends: [stylelintConfigStandard, stylelintScss],
    plugins: [stylelintScss, stylelintOrder],
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            { ignorePseudoClasses: ['global'] },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            { ignorePseudoElements: ['deep'] },
        ],
        'block-no-empty': true,
        'selector-max-id': 0,
        'no-descending-specificity': true,
        'rule-empty-line-before': [
            'always',
            { except: ['first-nested'], ignore: ['after-comment'] },
        ],
        'selector-class-pattern': null,
        'color-named': 'never',
        'color-hex-length': 'long',
        'order/order': [
            'custom-properties',
            'declarations',
        ],
        'order/properties-order': [
            [
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'z-index',
                'display',
                'justify-content',
                'align-items',
                
                'width',
                'height',
                'min-width',
                'min-height',
                'max-width',
                'max-height',
                'margin',
                'padding',
                'gap',
                
                'background',
                'background-color',
                'border',
                'border-radius',
                'box-shadow',
                'opacity',
                
                'font',
                'font-size',
                'font-weight',
                'line-height',
                'text-align',
                'color',
                
                'transition',
                'animation',
                'z-index'
            ],
            { unspecified: 'bottomAlphabetical' },
        ],
    },
    fix: true,
};