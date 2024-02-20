import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Step } from "../../utils/data/createCvSteps"

export const useSteps = (
  steps: Step[],
  pathname: string | null | undefined
) => {
  const navigate = useNavigate()

  const [nextPath, setNextPath] = useState<string | null>(null)
  const [prevPath, setPrevPath] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<Step | null>(null)

  useEffect(() => {
    switch (pathname) {
      case null:
      case "":
      case undefined:
      case steps[0].path:
        setCurrentStep(steps[0])
        setNextPath(steps[1].path)
        setPrevPath(null)
        break
      case steps[steps.length - 1].path:
        setCurrentStep(steps[steps.length - 1])
        setNextPath(null)
        setPrevPath(steps[steps.length - 2].path)
        break
      default:
        const currentStepIndex = steps.findIndex(
          (step) => step.path === pathname
        )
        setCurrentStep(steps[currentStepIndex])
        setNextPath(steps[currentStepIndex + 1].path)
        setPrevPath(steps[currentStepIndex - 1].path)
    }
  }, [pathname, steps])
  const next = () => {
    if (nextPath) {
      navigate(`/work-with-us/1/apply/${nextPath}`, {
        replace: true
      })
    }
  }
  const previous = () => {
    if (prevPath) {
      navigate(`/work-with-us/1/apply/${prevPath}`, {
        replace: true
      })
    }
  }

  return { next, previous, nextPath, prevPath, currentStep }
}
