import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconLogout,
  IconSwitchHorizontal,
  IconPhotoSearch,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import Image from "next/image";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", route: "/" },
  { icon: IconGauge, label: "Dashboard", route: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", route: "/analytics" },
  {
    icon: IconPhotoSearch,
    label: "Medical Image Analysis",
    route: "/MIA",
  },
];

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    destroyCookie(null, "token");
    router.push("/signin");
  };

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={router.pathname === link.route}
      onClick={() => {
        router.push(link.route);
      }}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Image
          src="/assets/Icon.svg"
          alt="logo"
          width={50}
          height={50}
          />
          </Center>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconLogout} label="Logout" onClick={handleLogout} />
      </Stack>
    </nav>
  );
}
