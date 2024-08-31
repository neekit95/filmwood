import stylelintConfigStandard from 'stylelint-config-standard';
import stylelintScss from 'stylelint-scss';

export default {
    extends: [stylelintConfigStandard, stylelintScss],
    plugins: [stylelintScss],
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
    },
};
