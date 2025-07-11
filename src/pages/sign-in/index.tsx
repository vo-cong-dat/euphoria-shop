import { handleLogin } from "@/api/login";
import BannerSignIn from "@/assets/images/banners/bannder-5.webp";
import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { GoogleIcon, XIcon } from "@/components/icons";
import { Input } from "@/components/input";
import { KeyLocalStorage } from "@/constants/localstorage";
import { routers } from "@/router/routers";
import { schemaLogin, type TLogin } from "@/shemas/login";
import BannerTemplate from "@/template/banner-template";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { UserContext } from "../home/_hooks/use-context-user";

export default function SignInPage() {
  const navigation = useNavigate();

  const form = useForm<TLogin>({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: TLogin) => {
    try {
      const res = await handleLogin(data);
      localStorage.setItem(KeyLocalStorage.ACCESS_TOKEN, res.data.accessToken);
      toast("Login Success");
      navigation(routers.HOME);
    } catch (error) {
      const message = error?.message;
      toast.error(message);
    }
  };

  return (
    <BannerTemplate banner={BannerSignIn} titlePage="Sign In Page">
      <div className="space-y-5">
        <Button
          variant="secondary"
          className="w-full"
          startIcon={<GoogleIcon className="size-5" />}
        >
          Continue With Google
        </Button>
        <Button
          variant="secondary"
          className="w-full"
          startIcon={<XIcon className="size-5" />}
        >
          Continue With Twitter
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>User name or email address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </BannerTemplate>
  );
}
