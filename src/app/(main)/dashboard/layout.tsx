import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import { getActiveProductsWithPrice } from "@/lib/supabase/queries";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: any;
};

export const metadata: Metadata = {
  title: "Dashboard | SyncBoard",
};

const DashboardLayout = async ({ children, params }: Props) => {
  const { data: products, error } = await getActiveProductsWithPrice();

  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default DashboardLayout;
