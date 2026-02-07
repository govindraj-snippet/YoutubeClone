import { formatDistanceToNow } from 'date-fns';

export const formatViews = (views?: string): string => {
    if (!views) return '0 views';
    const num = parseInt(views, 10);
    if (isNaN(num)) return '0 views';

    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M views`;
    }
    if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K views`;
    }
    return `${num} views`;
};

export const formatDate = (publishedAt: string): string => {
    if (!publishedAt) return '';
    return formatDistanceToNow(new Date(publishedAt), { addSuffix: true });
};

export const formatDuration = (duration: string): string => {
    if (!duration) return '';

    // Parse Duration like PT1H2M10S
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (!match) return '0:00';

    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');

    let h = parseInt(hours || '0', 10);
    let m = parseInt(minutes || '0', 10);
    let s = parseInt(seconds || '0', 10);

    if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    return `${m}:${s.toString().padStart(2, '0')}`;
};
