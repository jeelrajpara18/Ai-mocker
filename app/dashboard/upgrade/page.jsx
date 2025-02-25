"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { upgradePlans } from "@/utils/data";
import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Upgrade() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold">Upgrade</h1>
        <p className="text-muted-foreground">
          Choose the plan that works best for you
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {upgradePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.name === "Free" ? "outline" : "default"}
                >
                  {plan.name === "Free" ? "Current Plan" : "Upgrade Now"}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Upgrade;
