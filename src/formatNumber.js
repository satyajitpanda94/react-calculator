export const formatNumber = (number) => {
    if (!number) return;

    let [integer, decimal] =  number.split('.')

    if (decimal == null)
        return new Intl.NumberFormat("en-US").format(integer);

    return `${new Intl.NumberFormat("en-US").format(integer)}.${decimal}`;
}
