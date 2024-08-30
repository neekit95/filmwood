import stylelintConfigStandard from 'stylelint-config-standard';

export default {
    extends: [stylelintConfigStandard],
    rules: {
        'color-named': 'never', // Запрещает использование именованных цветов
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'], // Игнорирует специфические псевдоклассы
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['deep'],
            },
        ],
        'block-no-empty': true,
        'selector-max-id': 0, // Запрещает ID в селекторах
        'no-descending-specificity': true, // Запрещает селекторы с более низкой специфичностью после более высоких
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
    },
};
