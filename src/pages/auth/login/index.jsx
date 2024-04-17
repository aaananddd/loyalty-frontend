import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import routePath from "@/router/routePath";
import { LoginAPI } from "@/services/api";
import { useAuth } from "@/utils/provider/authProvider";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
const LoginPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const loginMutation = useMutation({
    mutationFn: LoginAPI,
    onSuccess: (data) => {
      setToken(data);
      navigate(routePath.dashboard);
    },
    onError: ({ response }) => {
      setError("root.serverError", {
        type: response.status,
        message: response.data.message,
      });
    },
  });
  const onSubmit = (data) => localStorage.setItem("token", "afda");
  // const onSubmit = (data) => loginMutation.mutate(data);
  return (
    <Card className="w-[350px] m-auto my-40">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username / Email</Label>
              <Input
                id="email"
                type="text"
                {...register("usernameOrEmail", { required: true })}
              />
              {errors.usernameOrEmail && (
                <span className="form-error">
                  {errors.usernameOrEmail.message}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="* * * * * *"
                  {...register("password", { required: true })}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="absolute right-0 top-0"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </Button>
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
                {errors.root && (
                  <span className="form-error">
                    {errors.root.serverError.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            {loginMutation.isPending ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginPage;
