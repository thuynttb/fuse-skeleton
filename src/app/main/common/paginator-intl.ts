import { MatPaginatorIntl } from '@angular/material';

const japaneseRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
        return `0項目／全${length}項目`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex}項目／全${length}項目`;
};

export function japanesePaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = '項目/ページ：';
    paginatorIntl.nextPageLabel = '次のページ';
    paginatorIntl.previousPageLabel = '前のページ';
    paginatorIntl.getRangeLabel = japaneseRangeLabel;

    return paginatorIntl;
}
