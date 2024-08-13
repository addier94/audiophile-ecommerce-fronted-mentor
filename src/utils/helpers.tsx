export class helpers {
  static slug(name: string) {
    return (
      name
        .trim()
        .toLowerCase()
        // Replace non-alphanumeric characters with hyphens
        .replace(/[^a-z0-9]+/g, "-")
        // Remove leading or trailing hyphens
        .replace(/^-+|-+$/g, "")
    );
  }

  static truncateText(text: string, limit: number) {
    if (text.length <= limit) {
      return text;
    }

    return text.substring(0, limit) + "...";
  }

  static formatMoney(
    amount: number,
    currency: string = "USD",
    locales: string = "en-US"
  ): string {
    return new Intl.NumberFormat(locales, {
      style: "currency",
      currency,
    }).format(amount);
  }
}
