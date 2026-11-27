import aws from "@/assets/logos/aws.png";
import terraform from "@/assets/logos/terraform.png";
import kubernetes from "@/assets/logos/kubernetes.png";
import docker from "@/assets/logos/docker.png";
import argocd from "@/assets/logos/argocd.png";
import githubActions from "@/assets/logos/github-actions.png";
import prometheus from "@/assets/logos/prometheus.png";
import grafana from "@/assets/logos/grafana.png";
import postgresql from "@/assets/logos/postgresql.png";
import cloudwatch from "@/assets/logos/cloudwatch.png";

// Tools we use in delivery. Listing a tool is not a partnership claim.
export const tech = {
  aws: { name: "AWS", logo: aws },
  terraform: { name: "Terraform / Terragrunt", logo: terraform },
  kubernetes: { name: "Kubernetes (EKS)", logo: kubernetes },
  docker: { name: "Docker", logo: docker },
  argocd: { name: "Argo CD", logo: argocd },
  "github-actions": { name: "GitHub Actions", logo: githubActions },
  prometheus: { name: "Prometheus", logo: prometheus },
  grafana: { name: "Grafana", logo: grafana },
  postgresql: { name: "PostgreSQL", logo: postgresql },
  cloudwatch: { name: "CloudWatch", logo: cloudwatch },
} as const;

export type TechKey = keyof typeof tech;
