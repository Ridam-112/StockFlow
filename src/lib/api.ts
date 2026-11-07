import {
  mockStats,
  mockShops,
  mockOrders,
  mockUsers,
  mockRiders,
  mockProducts,
  mockCategories,
  mockShopTypes,
  mockCoupons,
  mockDeliveryCharges,
  mockBanners,
  mockSeasonalCampaign,
  mockCafeConfig,
  mockAnalytics,
  mockPincodes
} from "./mockAdminData";

declare global {
  interface Window {
    Capacitor?: { isNative?: boolean };
  }
}

const isCapacitorNative =
  typeof window !== "undefined" &&
  (window.Capacitor?.isNative === true ||
    window.location.protocol === "capacitor:");

const BASE: string = isCapacitorNative
  ? ((import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, "") ?? "https://swiftmart.space") + "/api"
  : (import.meta.env.VITE_API_URL ? `${(import.meta.env.VITE_API_URL as string).replace(/\/+$/, "")}/api` : "/api");

function getTokens() {
  return {
    access: localStorage.getItem("sm_at"),
    refresh: localStorage.getItem("sm_rt"),
  };
}

export function setTokens(access: string, refresh: string) {
  localStorage.setItem("sm_at", access);
  localStorage.setItem("sm_rt", refresh);
}

export function clearTokens() {
  localStorage.removeItem("sm_at");
  localStorage.removeItem("sm_rt");
  localStorage.removeItem("sm_user");
  localStorage.removeItem("sm_role");
}

function getMockFallback<T>(path: string, options: RequestInit = {}): T {
  const method = (options.method || "GET").toUpperCase();
  const cleanPath = path.split("?")[0];

  if (method === "GET") {
    if (cleanPath === "/admin/stats") {
      return { success: true, stats: mockStats } as unknown as T;
    }
    if (cleanPath === "/shops" || cleanPath.startsWith("/shops/")) {
      return { success: true, shops: mockShops, shop: mockShops[0] } as unknown as T;
    }
    if (cleanPath === "/orders" || cleanPath.startsWith("/orders/")) {
      return { success: true, orders: mockOrders, order: mockOrders[0] } as unknown as T;
    }
    if (cleanPath === "/users") {
      return { success: true, users: mockUsers } as unknown as T;
    }
    if (cleanPath === "/delivery/fleet" || cleanPath === "/delivery" || cleanPath === "/admin/riders") {
      return { success: true, fleet: mockRiders, partners: mockRiders, riders: mockRiders } as unknown as T;
    }
    if (cleanPath.startsWith("/products")) {
      return { success: true, products: mockProducts, product: mockProducts[0] } as unknown as T;
    }
    if (cleanPath.startsWith("/categories")) {
      return { success: true, categories: mockCategories } as unknown as T;
    }
    if (cleanPath === "/shop-types") {
      return { success: true, shopTypes: mockShopTypes } as unknown as T;
    }
    if (cleanPath.startsWith("/commissions")) {
      return { success: true, commissions: [] } as unknown as T;
    }
    if (cleanPath.startsWith("/coupons")) {
      return { success: true, coupons: mockCoupons } as unknown as T;
    }
    if (cleanPath === "/delivery/charges") {
      return { success: true, charges: mockDeliveryCharges } as unknown as T;
    }
    if (cleanPath === "/support") {
      return { success: true, tickets: [] } as unknown as T;
    }
    if (cleanPath.startsWith("/admin/analytics")) {
      return { success: true, ...mockAnalytics } as unknown as T;
    }
    if (cleanPath === "/hero-banners/admin" || cleanPath === "/hero-banners") {
      return { success: true, banners: mockBanners } as unknown as T;
    }
    if (cleanPath === "/service-pincodes") {
      return { success: true, pincodes: mockPincodes } as unknown as T;
    }
    if (cleanPath.includes("/applications")) {
      return { success: true, applications: [] } as unknown as T;
    }
    if (cleanPath.includes("/custom-cakes")) {
      return { success: true, cakes: [], stats: { requested: 0, confirmed: 0 } } as unknown as T;
    }
    if (cleanPath.includes("/services/admin/bookings")) {
      return { success: true, bookings: [], statusCounts: { requested: 0 } } as unknown as T;
    }
    if (cleanPath === "/fcm/diagnostics") {
      return {
        success: true,
        tokensByRole: { customer: 48, vendor: 12, admin: 3 },
        totalSubscribers: 63,
        lastDeliveryAt: new Date().toISOString(),
      } as unknown as T;
    }
    if (cleanPath === "/notifications/broadcasts") {
      return { success: true, broadcasts: [] } as unknown as T;
    }
    if (cleanPath === "/homepage-sections" || cleanPath === "/homepage-sections/admin") {
      return { success: true, sections: [] } as unknown as T;
    }
    if (cleanPath === "/buckets/admin" || cleanPath === "/buckets") {
      return { success: true, buckets: [] } as unknown as T;
    }
    if (cleanPath === "/admin/managers") {
      return { success: true, managers: [] } as unknown as T;
    }
    if (cleanPath === "/admin/cities") {
      return { success: true, cities: [{ _id: "c1", name: "Balurghat", state: "West Bengal" }] } as unknown as T;
    }
    if (cleanPath === "/reports") {
      return { success: true, reports: [] } as unknown as T;
    }
    if (cleanPath === "/seasonal-campaign") {
      return {
        success: true,
        campaign: mockSeasonalCampaign
      } as unknown as T;
    }
    if (cleanPath === "/cafe-config") {
      return {
        success: true,
        campaign: mockCafeConfig
      } as unknown as T;
    }
    if (cleanPath === "/theme-config") {
      return {
        success: true,
        config: {
          primaryColor: "#7065fe",
          appName: "EXPT StockFlow",
        }
      } as unknown as T;
    }
    if (cleanPath === "/auth/me") {
      return {
        success: true,
        user: {
          id: "admin_stockflow_demo",
          name: "Omar Bergson",
          phone: "+91 9876543210",
          email: "admin@stockflow.dev",
          role: "super_admin",
          status: "active",
        }
      } as unknown as T;
    }
    return { success: true } as unknown as T;
  }

  // Fallback for mutations
  return { success: true, message: "Action saved successfully (StockFlow Portfolio Demo)" } as unknown as T;
}

const inFlightGets = new Map<string, Promise<any>>();

async function request<T>(path: string, options: RequestInit = {}, retry = true): Promise<T> {
  const isGet = !options.method || options.method === "GET";
  const { access } = getTokens();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Client-Source": isCapacitorNative ? "app" : "web",
    ...((options.headers ?? {}) as Record<string, string>),
  };
  if (access) headers["Authorization"] = `Bearer ${access}`;

  const fullUrl = `${BASE}${path}`;

  if (isGet) {
    const cacheKey = `${access ? 'auth:' : 'anon:'}${fullUrl}`;
    if (inFlightGets.has(cacheKey)) {
      return inFlightGets.get(cacheKey) as Promise<T>;
    }

    const getPromise = executeRequest<T>(fullUrl, options, headers, path, retry)
      .finally(() => {
        inFlightGets.delete(cacheKey);
      });

    inFlightGets.set(cacheKey, getPromise);
    return getPromise;
  }

  return executeRequest<T>(fullUrl, options, headers, path, retry);
}

async function executeRequest<T>(
  fullUrl: string,
  options: RequestInit,
  headers: Record<string, string>,
  path: string,
  retry: boolean
): Promise<T> {
  try {
    const res = await fetch(fullUrl, { ...options, headers });

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return getMockFallback<T>(path, options);
    }
    const data = (await res.json()) as T & { message?: string };
    if (!res.ok) throw new Error((data as { message?: string }).message ?? "Request failed");
    return data;
  } catch (err) {
    return getMockFallback<T>(path, options);
  }
}

export const api = {
  get: <T>(path: string, options?: RequestInit) => request<T>(path, { method: "GET", ...options }),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),
  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
  getTokens,
  setTokens,
  clearTokens,
  BASE,
  isCapacitorNative,
};
