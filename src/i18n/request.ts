import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

type Messages = Record<string, Record<string, unknown>>;

function deepMerge(base: Messages, override: Messages): Messages {
  const result = { ...base };
  for (const key in override) {
    if (
      typeof override[key] === "object" &&
      override[key] !== null &&
      !Array.isArray(override[key]) &&
      typeof base[key] === "object" &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      result[key] = { ...base[key], ...override[key] } as Record<string, unknown>;
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const frMessages = (await import(`../../messages/fr.json`)).default as Messages;
  if (locale === "fr") {
    return { locale, messages: frMessages };
  }

  const localeMessages = (await import(`../../messages/${locale}.json`)).default as Messages;
  return {
    locale,
    messages: deepMerge(frMessages, localeMessages),
  };
});
