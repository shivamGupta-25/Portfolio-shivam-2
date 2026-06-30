"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

type WeatherIconProps = {
  code: number;
  className?: string;
};

function WeatherIcon({ code, className }: WeatherIconProps) {
  let Icon: LucideIcon = Sun;

  if (code === 0) Icon = Sun;
  else if (code <= 3) Icon = CloudSun;
  else if (code <= 48) Icon = CloudFog;
  else if (code <= 67) Icon = CloudRain;
  else if (code <= 77) Icon = CloudSnow;
  else if (code <= 82) Icon = CloudRain;
  else if (code >= 95) Icon = CloudLightning;
  else Icon = Cloud;

  return <Icon className={className} aria-hidden />;
}

function getServerSnapshot() {
  return null;
}

/**
 * Ticks once a second. The snapshot is cached in a ref and only
 * replaced inside `subscribe` when the interval actually fires —
 * never inside `getSnapshot`, so React isn't handed a new object
 * reference on every render check (that's what caused the
 * "getSnapshot should be cached" infinite-loop warning).
 */
function useClock() {
  const cached = useRef(new Date());

  const subscribe = useCallback((onStoreChange: () => void) => {
    const id = setInterval(() => {
      cached.current = new Date();
      onStoreChange();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const getSnapshot = useCallback(() => cached.current, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function DateTimeWeather({ className }: { className?: string }) {
  const now = useClock();
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(
    null
  );

  const { latitude, longitude, timezone } = DATA.weather;

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=${encodeURIComponent(timezone)}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          code: data.current.weather_code,
        });
      })
      .catch(() => { });

    return () => controller.abort();
  }, [latitude, longitude, timezone]);

  if (!now) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 text-sm text-muted-foreground tabular-nums",
          className
        )}
        aria-hidden
      >
        <span className="inline-block h-4 w-48 animate-pulse rounded bg-muted" />
      </div>
    );
  }

  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: timezone,
  }).format(now);

  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: timezone,
  }).format(now);

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(now);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground tabular-nums",
        className
      )}
    >
      <span>{day}</span>
      <span aria-hidden className="text-border">
        ·
      </span>
      <span>{date}</span>
      <span aria-hidden className="text-border">
        ·
      </span>
      <time dateTime={now.toISOString()}>{time}</time>
      {weather && (
        <>
          <span aria-hidden className="text-border">
            ·
          </span>
          <span className="inline-flex items-center gap-1">
            <WeatherIcon code={weather.code} className="size-3.5 shrink-0" />
            <span>{weather.temp}°C</span>
          </span>
          <span aria-hidden className="text-border">
            ·
          </span>
          <span>{DATA.location}</span>
        </>
      )}
    </div>
  );
}