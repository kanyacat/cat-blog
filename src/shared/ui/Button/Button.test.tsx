import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

describe('Button', () => {
    test('Test render', () => {
        const { t } = useTranslation('');

        render(<Button>{t('TEST')}</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        const { t } = useTranslation('');

        render(<Button theme={ThemeButton.CLEAR}>{t('TEST')}</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
