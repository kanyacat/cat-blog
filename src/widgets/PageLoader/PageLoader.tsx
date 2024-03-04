import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={styles.PageLoader}>
        <Loader />
    </div>
);
